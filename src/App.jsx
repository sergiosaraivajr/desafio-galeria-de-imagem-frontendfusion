import React, { useEffect, useState } from "react";
import ImageCard from "./components/ImageCard";
import ImageDetailsModal from "./components/ImageDetailsModal";

const API_URL = "https://picsum.photos/v2/list"; // URL da API

function App() {
  const [images, setImages] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchImages();
  }, []);

  // Função para buscar imagens da API
  const fetchImages = async () => {
    try {
      const response = await fetch(`${API_URL}?limit=30`);
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error("Erro ao buscar imagens", error);
    }
  };

  // Função para adicionar ou remover dos favoritos
  const toggleFavorite = (image) => {
    const isFavorite = favorites.find((fav) => fav.id === image.id);
    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav.id !== image.id));
    } else {
      setFavorites([...favorites, image]);
    }
  };

  // Função para abrir o modal com detalhes da imagem
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  return (
    <main>
      <header className="bg-green-800 shadow-gray-700 shadow-lg h-12 flex items-center justify-center">
        <h1 className="text-green-200 w-auto font-bold">
          Minha Galeria de Fotos
        </h1>
      </header>

      <section className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <ImageCard
            key={image.id}
            image={image}
            isFavorite={favorites.some((fav) => fav.id === image.id)}
            toggleFavorite={toggleFavorite}
            openModal={openModal}
          />
        ))}
      </section>

      {isModalOpen && (
        <ImageDetailsModal
          image={selectedImage}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </main>
  );
}

export default App;
