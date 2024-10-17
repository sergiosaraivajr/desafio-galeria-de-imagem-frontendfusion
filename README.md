# Galeria de Imagens - React e API Picsum Photos

Esta é uma aplicação de galeria de imagens construída com React utilizando a API Picsum Photos. A aplicação permite visualizar imagens, salvar nos favoritos, filtrar por autor ou favoritos e exibir informações detalhadas das imagens ao clicar.

## Funcionalidades

- Visualização de Imagens: As imagens são obtidas da API Picsum Photos e exibidas em uma grade responsiva.
- Favoritos: Os usuários podem marcar imagens como favoritas e visualizar apenas suas imagens favoritedas.
- Filtro por Autor: As imagens podem ser filtradas por autor, facilitando a busca por trabalhos de um autor específico.
- Informações Detalhadas: Ao clicar em uma imagem, um modal é exibido com detalhes como autor, dimensões e ID da imagem.

## Tecnologias Utilizadas

- React 18: Framework JavaScript para construção da interface.
- Tailwind CSS: Biblioteca de utilitários CSS para estilização.
- Vite: Ferramenta de construção para desenvolvimento rápido de projetos em React.
- API Picsum Photos: Fonte de imagens aleatórias para simular uma galeria de fotos.

## Estrutura do Projeto

src/
│
├── components/
│ ├── ImageCard.jsx # Componente que renderiza cada imagem
│ ├── ImageDetailsModal.jsx # Componente que exibe os detalhes da imagem em um modal
│
├── App.jsx # Componente principal da aplicação
├── index.css # Arquivo de estilos base utilizando Tailwind CSS
├── main.jsx # Ponto de entrada da aplicação
└── ...

# Componentes

## App.jsx

    Responsável por:
        - Buscar as imagens da API.
        - Gerenciar os estados de filtro e favoritos.
        - Renderizar os componentes de imagem e modal de detalhes.

## ImageCard.jsx

    Responsável por:
        - Renderizar cada imagem na galeria.
        - Gerenciar o botão de favoritos.

## ImageDetailsModal.jsx

    Responsável por:
        - Exibir as informações detalhadas da imagem (autor, ID, dimensões) em um modal.

## Melhorias Futuras

- Filtros adicionais por cor ou categorias específicas.
- Paginação para carregar mais imagens conforme o usuário rola a página.
- Integração com serviços de compartilhamento social.

## Contribuição

Se você deseja contribuir com melhorias, siga os passos abaixo:

- Faça um fork do projeto.
- Crie uma nova branch: git checkout -b feature-minha-melhoria.
- Faça suas alterações e commite-as: git commit -m 'Minha melhoria'.
- Envie para o repositório: git push origin feature-minha-melhoria.
- Crie um pull request para análise.
