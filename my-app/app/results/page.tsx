"use client"; // Mark this component as a Client Component

import { useSearchParams } from "next/navigation";
import SimpleCard from "@/components/SimpleCard"; // Adjust the path based on your directory structure

export default function ResultPage() {
  const searchParams = useSearchParams(); // Get the search params from URL
  const message = searchParams.get("message"); // Get the "message" query param

  const restaurant = {
    name: "Restaurant A",
    image: "download (1).jpg", // Replace with a real image URL
    address: "123 Main Street, City A",
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl mb-4"> Because you were feeling {message}:</h1>
      {/* Add more content or logic here for showing recommended restaurants */}

      <div className="flex flex-col gap-8 p-8">
        {/* Card for the restaurant name */}
        <div id="restaurant" className="mb-32"> {/* Add large margin-bottom */}
          <SimpleCard content={restaurant.name} type="text" />
        </div>

        {/* Card for the restaurant image */}
        <div id="picture" className="mb-32"> {/* Add large margin-bottom */}
          <SimpleCard content={restaurant.image} type="image" />
        </div>

        {/* Card for the restaurant address */}
        <div id="address" className="mb-32"> {/* Add large margin-bottom */}
          <SimpleCard content={restaurant.address} type="text" />
        </div>
      </div>
    </div>
  );
}