"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";

type SignupFormValues = {
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
  agree: boolean;
  countryCode: string;
};

type LoginFormValues = {
  email: string;
  password: string;
};

type OrgFormValues = {
  orgName: string;
  employeeCount: number;
};

type AuthFormProps =
  | { type: "signup"; onSubmit: SubmitHandler<SignupFormValues> }
  | { type: "login"; onSubmit: SubmitHandler<LoginFormValues> }
  | { type: "org"; onSubmit: SubmitHandler<OrgFormValues> };

// ✅ Some commonly used country codes (you can add more if needed)
const countryCodes = [
  { code: "+1", label: "🇺🇸 (+1)" },
  { code: "+44", label: "🇬🇧 (+44)" },
  { code: "+91", label: "🇮🇳 (+91)" },
  { code: "+61", label: "🇦🇺 (+61)" },
  { code: "+81", label: "🇯🇵 (+81)" },
  { code: "+49", label: "🇩🇪 (+49)" },
  { code: "+33", label: "🇫🇷 (+33)" },
];

export default function AuthForm({ type, onSubmit }: AuthFormProps) {
  const { register, handleSubmit } = useForm<SignupFormValues | LoginFormValues | OrgFormValues>();

  const titles: Record<string, string> = {
    signup: "Create your account",
    login: "Welcome back",
    org: "Set up your organization",
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">{titles[type]}</h2>

        {type === "signup" && (
          <>
            <div className="mb-4">
              <label>Full Name</label>
              <input
                {...register("fullName", { required: true })}
                className="w-full border p-2 rounded"
                placeholder="Full Name"
              />
            </div>
            <div className="mb-4">
              <label>Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full border p-2 rounded"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label>Create Password</label>
              <input
                type="password"
                {...register("password", { required: true, minLength: 6 })}
                className="w-full border p-2 rounded"
                placeholder="Password"
              />
            </div>
            <div className="mb-4 flex gap-2">
              {/* ✅ Dropdown for country code */}
              <select
                {...register("countryCode", { required: true })}
                className="border w-28 p-2 rounded bg-white"
                defaultValue="+91"
              >
                {countryCodes.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.label}
                  </option>
                ))}
              </select>
              <input
                {...register("phoneNumber", { required: true })}
                className="flex-1 border p-2 rounded"
                placeholder="Phone Number"
              />
            </div>
            <div className="mb-4 flex items-center">
              <input type="checkbox" {...register("agree", { required: true })} className="mr-2" />
              <label className="text-sm">I agree to the Terms and Conditions</label>
            </div>
            <button type="submit" className="w-full py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
              Sign Up
            </button>
            <p className="text-center text-sm mt-4">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-blue-600 hover:underline">
                Login here
              </Link>
            </p>
          </>
        )}

        {type === "login" && (
          <>
            <div className="mb-4">
              <label>Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full border p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label>Password</label>
              <input
                type="password"
                {...register("password", { required: true })}
                className="w-full border p-2 rounded"
              />
            </div>
            <button type="submit" className="w-full py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
              Login
            </button>
            <p className="text-center text-sm mt-4">
              New user?{" "}
              <Link href="/auth/signup" className="text-blue-600 hover:underline">
                Create an account
              </Link>
            </p>
          </>
        )}

        {type === "org" && (
          <>
            <div className="mb-4">
              <label>Organization Name</label>
              <input
                {...register("orgName", { required: true })}
                className="w-full border p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label>Employee Count</label>
              <input
                type="number"
                {...register("employeeCount", { required: true })}
                className="w-full border p-2 rounded"
              />
            </div>
            <button type="submit" className="w-full py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
              Get Started
            </button>
          </>
        )}
      </form>
    </div>
  );
}
