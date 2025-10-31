export const API_URL = process.env.NEXT_PUBLIC_API_GATEWAY_URL;
const SERVICE_NAME = process.env.NEXT_PUBLIC_SERVICE_NAME ;
// const name= localStorage.getItem("name");
interface User {
  id: string;
  role: string;
  orgId: string;
}

interface ValidateTokenResponse {
  message: string;
  user: User;
  action?: string;
  orgId: string;  
}

export async function apiRequest<T>(
  endpoint: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  body: Record<string, unknown> | null = null,
  token: string | null = null,
  // name: string | null = null
): Promise<T> {
  const headers: HeadersInit = { "Content-Type": "application/json" };
  if (token) headers.Authorization = `Bearer ${token}`;

  const payload =
    body && Object.keys(body).length > 0
      ? { ...body, serviceName: SERVICE_NAME }
      : { serviceName: SERVICE_NAME };

  try {
    console.log(" API Request:", {
      url: `${API_URL}${endpoint}`,
      method,
      headers,
      body: method !== "GET" ? payload : undefined,
    });

    const res = await fetch(`${API_URL}${endpoint}`, {
      method,
      headers,
      body: method !== "GET" ? JSON.stringify(payload) : undefined,
    });

    let data: any = {};
    try {
      data = await res.json();
    } catch {
      console.warn("⚠️ Response not JSON or empty");
    }

    if (!res.ok) {
      console.error("❌ API Error:", res?.status, data);
      const cleanMessage =
        data?.message ||
        data?.error ||
        data?.supabaseError ||
        data?.details ||
        `Request failed with status ${res.status}`;
      throw new Error(cleanMessage);
    }

    console.log("✅ API Success:", data);
    return data as T;
  } catch (err: any) {
    console.error("🚨 apiRequest Catch:", err);
    if(err==="token not found") {localStorage.removeItem("token"); throw new Error("session expired Please log in again.");}
    
    throw new Error(err?.message || "Something went wrong");
  }
}

export async function validateToken(
  token: string,
): Promise<ValidateTokenResponse> {
  return apiRequest<ValidateTokenResponse>("/identity/api/auth/validate-token", "POST", null, token );
}

export async function oauthLogin(provider: string): Promise<{ message: string; url: string }> {
  return apiRequest<{ message: string; url: string }>(`/identity/api/auth/oauth/login/${provider}`, "GET",null, null);
}
