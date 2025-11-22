"use client";
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { apiRequest } from "@/lib/api";
import { Toaster, toast } from "sonner";
import { useRouter } from "next/navigation";

type NewUserFormValues = {
  fullName: string;
  email: string;
  role: string;
};

type NewUserFormProps = {
  onUserCreated: () => void;
};

export default function NewUserForm({ onUserCreated }: NewUserFormProps) {
  const router = useRouter();
  const { register, handleSubmit } = useForm<NewUserFormValues>();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Session expired. Please log in again.");
      router.push("/auth/login");
    }
  }, [router]);

  const onSubmit: SubmitHandler<NewUserFormValues> = async (data) => {
    try {
      const orgId = localStorage.getItem("orgId");
      const res = await apiRequest(
        "/crm/api/user/create",
        "POST",
        {...data, orgId},
        localStorage.getItem("token")
      );
      if (res === "User created successfully!") {
        toast.success("User created successfully!");
        onUserCreated();
      }
    } catch (err) {
      toast.error("User creation failed");
      console.log(err);
    }
  };

  return (
    <div className="bg-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-3"
      >
        <h3 className="text-lg font-semibold mb-2">Add User</h3>

        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            {...register("fullName", { required: "Full Name is required" })}
            className="w-full border p-2 rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
            placeholder="Full Name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full border p-2 rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
            placeholder="Email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Role</label>
          <input
            type="text"
            {...register("role", { required: "Role is required" })}
            className="w-full border p-2 rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
            placeholder="Role"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded mt-3 hover:bg-blue-600 transition"
        >
          Create
        </button>
      </form>

      <Toaster />
    </div>
  );
}
