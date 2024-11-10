const booksContainer = document.querySelector("#books-container");
const addBook = document.querySelector("#add-book");
const modal = document.querySelector("#modal");
const addBookCloseModal = document.querySelector("#add-book-modal");
const formBooks = document.querySelector("#form-books");
const closeModal = document.querySelector("#close-modal");
const allInputs = document.querySelectorAll("input");
const myLibrary = [];


addBook.addEventListener("click", () => {
    modal.showModal();
})

addBookCloseModal.addEventListener("click", () => {
    modal.close();
})

closeModal.addEventListener("click", () => {
    modal.close();
})

function clearAllInputs() {
    formBooks.reset();
}

formBooks.addEventListener("submit", (e) => {
    e.preventDefault();

    let formData = new FormData(formBooks);
    formData = Object.fromEntries(formData);
    addBookLibrary(formData.titleBook, formData.authorBook, formData.pagesBook, formData.readBook);
    render();
    clearAllInputs();
})

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read === "on";
}

function addBookLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    console.log(myLibrary);
};



function render() {
    booksContainer.textContent = "";
    myLibrary.forEach((book, index) => {
        const div = document.createElement("div");
        const divButtons = document.createElement("div");
        const titleP = document.createElement("h3");
        const authorP = document.createElement("p");
        const pagesP = document.createElement("p");
        const readP = document.createElement("p")
        titleP.textContent = `Name Of Book: ${book.title}`;
        authorP.textContent = `Author Of Book: ${book.author}`;
        pagesP.textContent = `Pages Of Book: ${book.pages}`;
        readP.textContent = `Read: ${book.read ? "Read": "Not Read"}`;

        booksContainer.appendChild(div);
        div.appendChild(titleP);
        div.appendChild(authorP);
        div.appendChild(pagesP);
        div.appendChild(readP);
        div.appendChild(divButtons);

        const readButton = document.createElement("button");
        readButton.textContent = "Read";
        divButtons.appendChild(readButton);
        readButton.addEventListener("click", ()=> {
            book.read = !book.read;
            render();
        })

        const delateButon = document.createElement("button");
        
        delateButon.textContent = "Delete Book";
        divButtons.appendChild(delateButon);
        delateButon.addEventListener("click", () => {
            myLibrary.splice(-1);
            render();
        })

    })
}


