import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-gray-800">404</h1>
        <p className="text-xl text-gray-600 mt-4">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-[#6c4db47a] text-white border-spacing-8 border-4 border-[#2222] text-lg font-medium rounded-xl hover:bg-[#9373dd7a] transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
