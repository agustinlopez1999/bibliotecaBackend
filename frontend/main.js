document.addEventListener("DOMContentLoaded", () => {
  const bookContainer = document.getElementById("book-container");

  // Función para obtener los libros desde la API
  const fetchBooks = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/libros/");
      const books = await response.json();
      displayBooks(books);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  // Función para mostrar los libros en el DOM
  const displayBooks = (books) => {
    books.forEach((book) => {
      const bookElement = document.createElement("div");
      bookElement.classList.add("box");
      bookElement.innerHTML = `
                <h3 class="book_title">${book.title}</h3>
                <img class="book_cover" src="${book.cover}"/>
                <h2 class="writer">Autor: ${book.author} </h2>
                <h2 class="genre">Genero: ${book.genre} </h2>
                <h2 class="language">${book.language} </h2>
            `;
      bookContainer.appendChild(bookElement);
    });
  };

  // Llamar a la función para obtener y mostrar los libros
  fetchBooks();
});
