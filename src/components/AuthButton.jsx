"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export default function AuthButton() {
  const { isLoading, isAuthenticated, login, logout } = useKindeBrowserClient();

  if (isLoading) return null;

  return isAuthenticated ? (
    <button 
      onClick={logout}
      className="bg-red-500 text-white px-4 py-2 rounded"
    >
      Log out
    </button>
  ) : (
    <button 
      onClick={login}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Log in
    </button>
  );
}