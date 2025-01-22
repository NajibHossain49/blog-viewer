// app/profile/page.js
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    redirect('/api/auth/login');
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to your profile!</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <p className="text-lg mb-2">Hello, {user.given_name || user.email}!</p>
        <p className="text-gray-600">Your email: {user.email}</p>
      </div>
    </div>
  );
}