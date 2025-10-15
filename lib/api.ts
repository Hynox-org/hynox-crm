export const API_URL = process.env.NEXT_PUBLIC_API_GATEWAY_URL;
const SERVICE_NAME = process.env.NEXT_PUBLIC_SERVICE_NAME || "default";

interface User {
  id: string;
  role: string;
}

interface ValidateTokenResponse {
  message: string;
  user: User;
}

export async function apiRequest<T>(
  endpoint: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  body: Record<string, unknown> | null = null,
  token: string | null = null
): Promise<T> {
  const headers: HeadersInit = { "Content-Type": "application/json" };
  if (token) headers.Authorization = `Bearer ${token}`;

  const payload = body
    ? { ...body, serviceName: SERVICE_NAME }
    : { serviceName: SERVICE_NAME };

  try {
    const res = await fetch(`${API_URL}${endpoint}`, {
      method,
      headers,
      body: method !== "GET" ? JSON.stringify(payload) : undefined,
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      // ✅ Extract the clean message from backend
      const cleanMessage =
        data?.error ||
        data?.message ||
        data?.supabaseError ||
        data?.details ||
        "Something went wrong";

      throw { message: cleanMessage };
    }

    return data as T;
  } catch (err: unknown) {
    // ✅ Always return a clean message
    throw { message: (err as Error).message || "Something went wrong" };
  }
}

export async function validateToken(
  token: string
): Promise<ValidateTokenResponse> {
  return apiRequest<ValidateTokenResponse>("/identity/api/auth/validate-token", "POST", null, token);
}

export async function oauthLogin(provider: string): Promise<{ message: string; url: string }> {
  return apiRequest<{ message: string; url: string }>(`/identity/api/auth/oauth/login/${provider}`, "GET");
}
