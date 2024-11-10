function addBook() {
    const imgUrl = document.getElementById("imgUrl").value;
    const bookTitle = document.getElementById("bookTitle").value;
    const bookNotes = document.getElementById("bookNotes").value;

    const bookList = document.getElementById("bookList");

    const bookItem = document.createElement("div");
    bookItem.classList.add("book-item");

    // Create the delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerText = "X";
    deleteBtn.onclick = function() {
        bookList.removeChild(bookItem);
    };
    bookItem.appendChild(deleteBtn);

    const bookImg = document.createElement("img");
    bookImg.src = imgUrl;
    bookItem.appendChild(bookImg);

    const title = document.createElement("h3");
    title.innerText = bookTitle;
    bookItem.appendChild(title);

    const notes = document.createElement("p");
    notes.innerText = bookNotes;
    bookItem.appendChild(notes);

    bookList.appendChild(bookItem);

    // Clear input fields
    document.getElementById("imgUrl").value = '';
    document.getElementById("bookTitle").value = '';
    document.getElementById("bookNotes").value = '';
}
