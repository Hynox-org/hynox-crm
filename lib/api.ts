export const API_URL = process.env.NEXT_PUBLIC_API_GATEWAY_URL;
const SERVICE_NAME = process.env.NEXT_PUBLIC_SERVICE_NAME || "default";

export async function apiRequest<T = any>(
  endpoint: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  body: any = null,
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
  } catch (err: any) {
    // ✅ Always return a clean message
    throw { message: err.message || "Something went wrong" };
  }
}
