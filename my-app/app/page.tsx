"use client"; // Mark this component as a Client Component

import { useState } from "react";
import { useRouter } from "next/navigation"; // Updated import for routing
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image"; // Import Image from Next.js

export default function Home() {
  const [message, setMessage] = useState(""); // State to store the textarea input
  const [feeling, setFeeling] = useState(''); // User input state
  const [error, setError] = useState<string | null>(null);   // Error handling state
  const router = useRouter(); // Next.js router hook from next/navigation

  // Function to call Flask API
  async function submitFeeling(feeling: string) {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/emotion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({user_input: feeling}),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch recommendations');
      }

      const data = await response.json();
      console.log('Recommended Restaurants:', data.restaurants);

      // Pass data to the results page
      router.push(`/results?restaurants=${encodeURIComponent(JSON.stringify(data.restaurants))}`);

    } catch (error) {
      console.error('Error fetching recommendations:', error);
      setError('Failed to get recommendations. Please try again.');
    }
  }

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (feeling) {
      await submitFeeling(feeling);
    } else {
      setError('Please enter a feeling');
    }
  };

  // Handle button click to navigate to results page
  const handleButtonClick = () => {
    // Check if there is any message typed before navigating
    if (message) {
      router.push(`/results?message=${encodeURIComponent(message)}`); // Navigate to results page with the message as a query parameter
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between p-8 pb-20 gap-4 sm:p-16">
      
      {/* Image near the top */}
      <div className="flex justify-center">
        <Image
          src="/download.jpg" // Update this with your actual image path
          alt="Your Image Description"
          width={400} // Adjust the size to fit your design
          height={200}
          className="object-cover" // Keeps image aspect ratio
        />
      </div>

      {/* Form at the bottom */}
      <main className="flex flex-col gap-4 items-center sm:items-start w-full mt-auto">
        {/* Form with textarea */}
        <div className="w-full">
          <div className="grid w-full gap-1.5">
            <div className="mb-2">
              <Label htmlFor="message" className="text-xl font-semibold">
                First Thought That Comes to Mind:
              </Label>
            </div>
            <Textarea
              placeholder="Type your message here."
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)} // Update state when typing
              className="w-full h-32 p-4 text-lg border border-gray-300 rounded-md"
            />
            <Button onClick={handleButtonClick} className="mt-4">
              Send message
            </Button>
          </div>
        </div>
      </main>

      {/* New form for Flask API */}
      <div className="flex flex-col items-center justify-center h-screen p-4">
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <input
            type="text"
            placeholder="How are you feeling?"
            value={feeling}
            onChange={(e) => setFeeling(e.target.value)}
            className="p-2 w-full mb-4 border border-gray-300 rounded"
          />
          <Button type="submit">Submit</Button>

          {error && <p className="text-red-500 mt-4">{error}</p>} {/* Display error if present */}
        </form>
      </div>
    </div>
  );
}
