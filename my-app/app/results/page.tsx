"use client"; // Mark this component as a Client Component

import { useSearchParams } from "next/navigation";

export default function ResultPage() {
  const searchParams = useSearchParams(); // Get the search params from URL
  const message = searchParams.get("message"); // Get the "message" query param

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl mb-4">Results</h1>
      <p className="text-lg">You said: {message}</p>
      {/* Add more content or logic here for showing recommended restaurants */}

    </div>
  );
}