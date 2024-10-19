// components/SimpleCard.tsx

interface SimpleCardProps {
  content: string; // The content can be name, address, or a URL for an image
  type: "text" | "image"; // Type of content (text or image)
}

export default function SimpleCard({ content, type }: SimpleCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-sm">
      {type === "image" ? (
        <img
          src={content}
          alt="Restaurant"
          className="w-full h-48 object-cover rounded-md"
        />
      ) : (
        <p className="text-xl font-bold">{content}</p>
      )}
    </div>
  );
}