"use client"; // Mark this component as a Client Component

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from 'react';
import SimpleCard from "@/components/SimpleCard"; // Adjust the path based on your directory structure

export default function ResultPage() {
  const searchParams = useSearchParams(); // Get the search params from URL
  const message = searchParams.get("message"); // Get the "message" query param

  // State for holding the first restaurant and feedback
  interface Restaurant {
    name: string;
    photos: string[];
    address: string;
  }

  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  // UseEffect to get data from the query params and set the first restaurant and feedback
  useEffect(() => {
    const restaurantsParam = searchParams.get("restaurants");
    const feedbackParam = searchParams.get("feedback");
    if (restaurantsParam) {
      const fetchedRestaurants = JSON.parse(decodeURIComponent(restaurantsParam));
      // Set only the first restaurant
      setRestaurant(fetchedRestaurants[0]);
    }
    if (feedbackParam) {
      setFeedback(decodeURIComponent(feedbackParam));
    }
  }, [searchParams]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">

      <div className="flex flex-col gap-8 p-8">
        {/* Render the fetched restaurant */}
        {feedback && (
          <div id="feedback" className="mb-16 w-full flex justify-start"> {/* Decreased margin-bottom */}
            <SimpleCard content={feedback} type="text" /> {/* Adjust width */}
          </div>
        )}

        <h1 className="text-2xl font-bold">Recommended Restaurant:</h1>
        
        {restaurant ? (
          <div className="flex flex-col gap-8 p-8">
            {/* Card for the restaurant name */}
            <div id="restaurant" className="mb-16 w-full flex justify-start"> {/* Decreased margin-bottom */}
              <SimpleCard content={restaurant.name} type="text" /> {/* Adjust width */}
            </div>

            {/* Card for the restaurant image */}
            <div id="picture" className="mb-16 w-full"> {/* Decreased margin-bottom */}
              <SimpleCard content={restaurant.photos[0]} type="image" /> {/* Adjust width */}
            </div>

            {/* Card for the restaurant address */}
            <div id="address" className="mb-16 w-full flex justify-start"> {/* Decreased margin-bottom */}
              <SimpleCard content={`Address: ${restaurant.address}`} type="text" /> {/* Adjust width */}
            </div>
          </div>
        ) : (
          <p>No recommendations found</p>
        )}
      </div>
    </div>
  );
}
