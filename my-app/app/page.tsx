"use client"; // Mark this component as a Client Component

import { useState } from "react";
import { useRouter } from "next/navigation"; // Updated import for routing
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image"; // Import Image from Next.js

export default function Home() {
  const [message, setMessage] = useState(""); // State to store the textarea input
  const [error, setError] = useState<string | null>(null);   // Error handling state
  const router = useRouter(); // Next.js router hook from next/navigation

  console.log('IM READYYY'); 

  // Function to call Flask API
  async function submitFeeling(feeling: string) {
    try {
      console.log('Submitting feeling:', feeling); // Log the submitted feeling
      const response = await fetch('http://127.0.0.1:5000/api/emotion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_input: feeling }),
      });

      console.log('Response Status:', response.status); // Log the response status
      console.log('Response Headers:', response.headers); // Log the response headers

      if (!response.ok) {
        const responseBody = await response.text();
        console.log('Response Body:', responseBody); // Log the response body
        throw new Error('Failed to fetch recommendations');
      }

      const data = await response.json();
      console.log('Recommended Restaurants:', data.restaurants);

      // Ensure that the API returns `feedback` in the response
      const feedback = data.feedback || "No feedback available"; // Fallback if feedback is not provided

      // Pass data to the results page
      router.push(`/results?restaurants=${encodeURIComponent(JSON.stringify(data.restaurants))}&feedback=${encodeURIComponent(feedback)}`);

    } catch (error) {
      console.error('Error fetching recommendations:', error);
      setError('Failed to get recommendations. Please try again.');
    }
  }

  // Handle form submission for the feeling input
  const handleButtonClick = async () => {
    console.log("Handling send message");
    console.log('Message:', message);
    
    if (message) {
      await submitFeeling(message); // Submit the message as the feeling
    } else {
      setError('Please enter a message');
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
            {error && <p className="text-red-500 mt-4">{error}</p>} {/* Display error if present */}
          </div>
        </div>
      </main>
    </div>
  );
}
