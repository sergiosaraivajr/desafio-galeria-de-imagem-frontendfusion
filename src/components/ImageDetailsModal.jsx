import React from "react";

function ImageDetailsModal({ image, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg max-w-lg w-full">
        <h2 className="text-xl font-bold mb-2">Detalhes da Imagem</h2>
        <img
          src={`https://picsum.photos/id/${image.id}/500/300`}
          alt={image.author}
          className="w-full h-auto mb-4 rounded-xl shadow-xl shadow-gray-800"
        />
        <p>
          <strong>Autor:</strong> {image.author}
        </p>
        <p>
          <strong>ID:</strong> {image.id}
        </p>
        <p>
          <strong>Dimensões:</strong> 500x300
        </p>

        <button
          className="mt-4 bg-green-600 -left-1/4 text-white px-4 py-2 rounded-lg"
          onClick={onClose}
        >
          Fechar
        </button>
      </div>
    </div>
  );
}

export default ImageDetailsModal;
