"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateAccountPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // 🔹 Values passed in query (from invite link)
  const emailFromInvite = searchParams.get("email") || "";
  const role = searchParams.get("role");
  const fullName = searchParams.get("fullName");
  const userState = searchParams.get("userState"); // "new_user" or "existing_user_not_logged_in"
  const returnUrl = searchParams.get("returnUrl"); // where to go after success

  // 🔹 Local state for form inputs
  const [email, setEmail] = useState(emailFromInvite);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🔹 Handle Create button click
  const handleCreate = async () => {
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    setError("");
    setLoading(true);

    try {
      let endpoint = "";
      let bodyData: any = {};

      // 🧠 Decide API endpoint based on userState
      if (userState === "new_user") {
        endpoint = `${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/identity/api/auth/signup`;
        bodyData = { fullName, role, email, password };
      } else {
        endpoint = `${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/identity/api/auth/login`;
        bodyData = { email, password };
      }

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
      });

      const data = await res.json();
      console.log("Response:", data);

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      // ✅ On success, redirect back to invite page
      if (returnUrl) {
        router.push(returnUrl);
      } else {
        router.push("/dashboard");
      }
    } catch (err: any) {
      console.error("Signup/Login Error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-md rounded-lg p-6 w-96">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          {userState === "new_user" ? "Create Your Account" : "Welcome Back"}
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          disabled
          className="w-full mb-3 px-3 py-2 border rounded-md bg-gray-100 text-gray-700"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-3 px-3 py-2 border rounded-md"
        />

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <button
          onClick={handleCreate}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
        >
          {loading
            ? "Please wait..."
            : userState === "new_user"
            ? "Create Account"
            : "Login"}
        </button>
      </div>
    </div>
  );
}
