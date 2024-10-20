"use client"; // Mark this component as a Client Component

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from 'react';
import SimpleCard from "@/components/SimpleCard"; // Adjust the path based on your directory structure

export default function ResultPage() {
  const searchParams = useSearchParams(); // Get the search params from URL
  const message = searchParams.get("message"); // Get the "message" query param

  // State for holding the first restaurant
  interface Restaurant {
    name: string;
    photos: string[];
    address: string;
  }

  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);

  // UseEffect to get data from the query params and set the first restaurant
  useEffect(() => {
    const restaurantsParam = searchParams.get("restaurants");
    if (restaurantsParam) {
      const fetchedRestaurants = JSON.parse(decodeURIComponent(restaurantsParam));
      // Set only the first restaurant
      setRestaurant(fetchedRestaurants[0]);
    }
  }, [searchParams]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl mb-4"> Because you were feeling {message}:</h1>

      <div className="flex flex-col gap-8 p-8">
        {/* Render the fetched restaurant */}
        <h1 className="text-2xl font-bold">Recommended Restaurant</h1>
        {restaurant ? (
          <>
            {/* Card for the restaurant name */}
            <div id="restaurant" className="mb-32"> {/* Add large margin-bottom */}
              <SimpleCard content={restaurant.name} type="text" />
            </div>

            {/* Card for the restaurant image */}
            <div id="picture" className="mb-32"> {/* Add large margin-bottom */}
              <SimpleCard content={restaurant.photos[0]} type="image" /> {/* Display the first image from the photos array */}
            </div>

            {/* Card for the restaurant address */}
            <div id="address" className="mb-32"> {/* Add large margin-bottom */}
              <SimpleCard content={restaurant.address} type="text" />
            </div>
          </>
        ) : (
          <p>No recommendations found</p>
        )}
      </div>
    </div>
  );
}
