"use client"; // Mark this component as a Client Component

import { useState } from "react";
import { useRouter } from "next/navigation"; // Updated import for routing
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Home() {

  const [message, setMessage] = useState(""); // State to store the textarea input
  const router = useRouter(); // Next.js router hook from next/navigation

  // Handle button click to navigate to results page
  const handleButtonClick = () => {
    // Check if there is any message typed before navigating
    if (message) {
      router.push(`/results?message=${encodeURIComponent(message)}`); // Navigate to results page with the message as a query parameter
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        {/* Form with textarea */}
        <div className="w-full">
          <div className="grid w-full gap-1.5">
            <Label htmlFor="message">How are you feeling today?</Label>
            <Textarea
              placeholder="Type your message here."
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)} // Update state when typing
              className="w-full h-32 p-4 text-sm border border-gray-300 rounded-md"
            />
            {/* Use Button component with onClick to trigger navigation */}
            <Button onClick={handleButtonClick} className="mt-4">
              Send message
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
