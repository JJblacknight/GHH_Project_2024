// components/SimpleCard.tsx

interface SimpleCardProps {
  content: string; // The content can be name, address, or a URL for an image
  type: "text" | "image"; // Type of content (text or image)
  background?: "light-orange" | "transparent"; // Optional background prop
  className?: string; // Optional className prop
}

export default function SimpleCard({ content, type, background, className}: SimpleCardProps) {
  const backgroundClass = background === "light-orange" ? "bg-orange-100" : "bg-transparent";

  return (
    <div className={`shadow-md rounded-lg p-4 max-w-sm text-center ${backgroundClass} ${className}`}>
      {type === "image" ? (
        <img
          src={content}
          alt="Restaurant"
          className="w-full h-48 object-cover rounded-md"
        />
      ) : (
        <p className="text-xl font-bold whitespace-pre-line">{content}</p>
      )}
    </div>
  );
}