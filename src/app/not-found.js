import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-7xl font-bold text-primary">404</h1>

      <h2 className="mt-4 text-2xl font-semibold">
        Page Not Found
      </h2>

      <p className="mt-2 text-gray-500 max-w-md">
        The page you are looking for does not exist or may have been moved.
      </p>

      <Link
        href="/"
        className="mt-6 px-6 py-3 rounded-lg bg-primary text-white hover:opacity-90 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}