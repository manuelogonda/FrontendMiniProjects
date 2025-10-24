document.addEventListener("DOMContentLoaded", () => {
const bookTitle = document.getElementById("bookTitle");
const bookAuthor = document.getElementById("bookAuthor");
const addBookBtn = document.getElementById("addBookBtn");
const bookGenre = document.getElementById("bookGenre");
const booklistsArea = document.getElementById("booklistsArea");
  displayBooks();

// Add event listener to the "Add Book" button
addBookBtn.addEventListener("click", () => {
    const title = bookTitle.value.trim();
    const author = bookAuthor.value.trim();
    const genre = bookGenre.value.trim();
    
    const books = JSON.parse(localStorage.getItem("books")) || [];
    const newBook = { bookTitle: title, bookAuthor: author, bookGenre: genre };
    
    books.unshift(newBook);
    localStorage.setItem("books", JSON.stringify(books));
    
    // Clear input fields
    bookTitle.value = "";
    bookAuthor.value = "";
    bookGenre.value = "";
    
    displayBooks();
    
});

// Function to display books
function displayBooks() {
    const books = JSON.parse(localStorage.getItem("books")) || [];
    booklistsArea.innerHTML = ""; // Clear previous list
    
    books.forEach((book, index) => {
        const container = document.createElement("div");
        container.classList.add("book");
        
        const titleDisplay = document.createElement("h4");
        titleDisplay.textContent = book.bookTitle;
        
        const authorDisplay = document.createElement("p");
        authorDisplay.innerHTML = `<strong>Author:</strong> ${book.bookAuthor}`;
        
        const genreDisplay = document.createElement("p");
        genreDisplay.innerHTML = `<strong>Genre:</strong> ${book.bookGenre}`;
        
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", () => deleteBook(index));
        
        container.appendChild(titleDisplay);
        container.appendChild(authorDisplay);
        container.appendChild(genreDisplay);
        container.appendChild(deleteBtn);
        booklistsArea.appendChild(container);
    });
}

// Function to delete a book
function deleteBook(index) {
    books = JSON.parse(localStorage.getItem("books")) || [];
    books.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(books));
    displayBooks();
}
});
