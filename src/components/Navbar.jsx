import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser(); // Get the user from the session

  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              My Blog
            </Link>
          </div>
          
          <div className="flex space-x-4">
            <Link href="/" className="hover:text-gray-400">
              Home
            </Link>

            {user ? (
              <>
                <Link href="/profile" className="hover:text-gray-400">
                  Profile
                </Link>
                <Link href="/api/auth/logout" className="hover:text-gray-400">
                  Logout
                </Link>
              </>
            ) : (
              <Link href="/api/auth/login" className="hover:text-gray-400">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;