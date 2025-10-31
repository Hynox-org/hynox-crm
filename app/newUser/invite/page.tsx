"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function InvitePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [thankYou, setThankYou] = useState(false);
  const [inviteInfo, setInviteInfo] = useState(null);

  useEffect(() => {
    const email = searchParams.get("email");
    const orgId = searchParams.get("orgId");
    const sender = searchParams.get("sender");
    const role = searchParams.get("role");
    const fullName = searchParams.get("fullName");
    if (!email) return;

    const verifyInvite = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/crm/api/invite/`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email , role, fullName ,orgId}),
          }
        );

        const data = await response.json();
        console.log("Invite verification:", data);

        if (data.userState === "new_user") {
          // Redirect to signup
          window.location.href = `${data.redirectLink}&returnUrl=/newUser/invite?email=${encodeURIComponent(email)}&orgId=${encodeURIComponent(orgId)}&sender=${encodeURIComponent(sender)}&role=${encodeURIComponent(role)}&fullName=${encodeURIComponent(fullName)}`;
        } else if (data.userState === "existing_user_not_logged_in") {
          // Redirect to login
          window.location.href = `${data.redirectLink}&returnUrl=/newUser/invite?email=${encodeURIComponent(email)}&orgId=${encodeURIComponent(orgId)}&sender=${encodeURIComponent(sender)}&role=${encodeURIComponent(role)}&fullName=${encodeURIComponent(fullName)}`;
        } else {
          // Existing and logged in → show invite page
          setInviteInfo({ sender, orgId, email });
          setLoading(false);
        }
      } catch (err) {
        console.error("Invite check failed:", err);
        setLoading(false);
      }
    };

    verifyInvite();
  }, [searchParams]);

  const handleAccept = () => {
    router.push("/dashboard");
  };

  const handleDecline = async () => {
    setThankYou(true);

    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_GATEWAY}/crm/api/invite`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: inviteInfo.email,
          userState: "invite_declined",
          redirectLink: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/crm/user/declined`,
        }),
      });
    } catch (error) {
      console.error("Decline mail error:", error);
    }
  };

  if (loading) return <div className="text-center mt-10 text-lg">Loading...</div>;

  if (thankYou)
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-semibold mb-4">Thank You!</h2>
        <p>Your response has been recorded.</p>
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-2xl font-bold mb-4">
        {inviteInfo.sender} is inviting you to join Organization ID:{" "}
        {inviteInfo.orgId}
      </h1>

      <div className="flex gap-4">
        <button
          onClick={handleAccept}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
        >
          Accept
        </button>
        <button
          onClick={handleDecline}
          className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
