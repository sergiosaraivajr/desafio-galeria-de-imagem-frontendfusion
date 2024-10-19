import React from "react";

function ImageCard({ image, isFavorite, toggleFavorite, openModal }) {
  return (
    <div className="relative">
      <img
        src={`https://picsum.photos/id/${image.id}/300/200`}
        alt={image.author}
        className="w-full h-auto cursor-pointer rounded-xl shadow-xl shadow-gray-800"
        onClick={() => openModal(image)}
      />
      <button
        className={`absolute top-2 right-2 p-1 ${
          isFavorite ? "" : "bg-slate-100"
        } text-white rounded-full`}
        onClick={() => toggleFavorite(image)}
      >
        {isFavorite ? (
          <img src="/public/star.png" alt="Favorito" className="w-7 h-7" />
        ) : (
          <img src="/public/star1.png" alt="Favorito" className="w-7 h-7" />
        )}
      </button>
    </div>
  );
}

export default ImageCard;
