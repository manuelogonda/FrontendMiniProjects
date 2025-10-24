
document.addEventListener("DOMContentLoaded", () => {
  const bookmarkNameInput = document.getElementById("bookmarkName");
  const bookmarkUrlInput = document.getElementById("bookmarkURL");
  const addBookmarkBtn = document.getElementById("addBookmarkBtn");
  const bookmarksList = document.getElementById("bookmarksList");


  // Add event listener to the "Add Bookmark" button
  addBookmarkBtn.addEventListener("click", () => {
    const name = bookmarkNameInput.value.trim();
    const url = bookmarkUrlInput.value.trim();
    
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    const newBookmark = { bookmarkName: name, bookmarkUrl: url };

    bookmarks.unshift(newBookmark);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

    // Clear input fields
    bookmarkNameInput.value = "";
    bookmarkUrlInput.value = "";

    displayBookmarks();
  });

  // Function to display bookmarks
  function displayBookmarks() {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    bookmarksList.innerHTML = ""; // Clear previous list

    bookmarks.forEach((bookmark, index) => {
      const container = document.createElement("div");
      container.classList.add("bookmark");

      const link = document.createElement("a");
      link.href = bookmark.bookmarkUrl;
      link.textContent = bookmark.bookmarkName;
      link.target = "_blank";

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("delete-btn");
      deleteBtn.addEventListener("click", () => deleteBookmark(index));

      container.appendChild(link);
      container.appendChild(deleteBtn);
      bookmarksList.appendChild(container);

    });
  }

  // Function to delete a bookmark
  function deleteBookmark(index) {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    bookmarks.splice(index, 1);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    displayBookmarks();
  }
});