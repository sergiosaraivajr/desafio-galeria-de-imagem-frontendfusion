import React, { useEffect, useState } from "react";
import ImageCard from "./components/ImageCard";
import ImageDetailsModal from "./components/ImageDetailsModal";

const API_URL = "https://picsum.photos/v2/list"; // URL da API

function App() {
  const [images, setImages] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterAuthor, setFilterAuthor] = useState("");
  const [showFavorites, setShowFavorites] = useState(false);

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

  // Função para obter lista única de autores
  const getAuthors = () => {
    const authors = images.map((image) => image.author);
    return [...new Set(authors)]; // Remove duplicatas
  };

  // Filtro de imagens
  const filteredImages = images.filter((image) => {
    if (showFavorites && !favorites.some((fav) => fav.id === image.id)) {
      return false; // Exibe apenas favoritos se o filtro estiver ativo
    }
    if (filterAuthor && image.author !== filterAuthor) {
      return false; // Aplica filtro por autor
    }
    return true;
  });

  return (
    <main>
      <header className="bg-green-800 shadow-gray-700 shadow-lg h-12 flex items-center justify-center">
        <h1 className="text-green-200 w-auto font-bold">
          Minha Galeria de Fotos
        </h1>
      </header>

      <div className="p-4 flex justify-between items-center">
        {/* Filtro por autor */}
        <div>
          <label htmlFor="author-filter" className="mr-2 font-bold">
            Filtrar por Autor:
          </label>
          <select
            id="author-filter"
            value={filterAuthor}
            onChange={(e) => setFilterAuthor(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="">Todos</option>
            {getAuthors().map((author) => (
              <option key={author} value={author}>
                {author}
              </option>
            ))}
          </select>
        </div>

        {/* Botão para mostrar favoritos */}
        <div>
          <button
            onClick={() => setShowFavorites(!showFavorites)}
            className={`p-2 rounded-lg ${
              showFavorites ? "bg-red-500" : "bg-gray-500"
            } text-white`}
          >
            {showFavorites ? "Mostrar Todos" : "Mostrar Favoritos"}
          </button>
        </div>
      </div>

      <section className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredImages.length > 0 ? (
          filteredImages.map((image) => (
            <ImageCard
              key={image.id}
              image={image}
              isFavorite={favorites.some((fav) => fav.id === image.id)}
              toggleFavorite={toggleFavorite}
              openModal={openModal}
            />
          ))
        ) : (
          <p className="text-center w-full">Nenhuma imagem encontrada.</p>
        )}
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
