import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-[#000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
                <Link href="/" className="text-white font-bold text-lg">
                    Board.
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/admin" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Admin Panel
              </Link>
                <Link href="/signin" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Sign In
              </Link>
                <Link href="/signup" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
