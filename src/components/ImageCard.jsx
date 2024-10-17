import React from "react";

function ImageCard({ image, isFavorite, toggleFavorite, openModal }) {
  return (
    <div className="relative">
      <img
        src={`https://picsum.photos/id/${image.id}/300/200`}
        alt={image.author}
        className="w-full h-auto cursor-pointer"
        onClick={() => openModal(image)}
      />
      <button
        className={`absolute top-2 right-2 p-1 ${
          isFavorite ? "bg-red-500" : "bg-gray-500"
        } text-white rounded-full`}
        onClick={() => toggleFavorite(image)}
      >
        {isFavorite ? "💾" : "⭐"}
      </button>
    </div>
  );
}

export default ImageCard;
