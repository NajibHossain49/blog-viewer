import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl">
              My Blog
            </Link>
          </div>
          
          <div className="hidden sm:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-gray-400">
              Home
            </Link>
            <Link href="/profile" className="text-gray-300 hover:text-gray-400">
              Profile
            </Link>
            <Link href="/" className="text-gray-300 hover:text-gray-400">
              Login
            </Link>
            <Link href="/" className="text-gray-300 hover:text-gray-400">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;