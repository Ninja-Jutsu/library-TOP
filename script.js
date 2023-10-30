const myBooks = []

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(){
    // Elements references:
    var main = document.querySelector(".main")
    var bookNameInput = document.querySelector("#book-name")
    var authorNameInput = document.querySelector("#book-author")
    var checkBoxInput = document.querySelector("#read")
    // Elements creation:
    var div = document.createElement("div")
    div.classList.add("book");
    var bookName = document.createElement ("p")
    bookName.innerText = bookNameInput.value
    var authorName = document.createElement ("p")
    authorName.innerText = authorNameInput.value
    var readButton = document.createElement("button")
    readButton.innerText = 
    div.appendChild(bookName)
    div.appendChild(authorName)
    main.appendChild(div);
    document.querySelector("#popup").style.display = "none"
    var inputList = document.querySelectorAll("input")
    inputList[0].value = ""
    inputList[1].value = ""
}

function openBook(){
    document.querySelector("#popup").style.display = "block"
}

const popupButton = document.querySelector('.new-book')
popupButton.addEventListener('click', openBook)

const addButton = document.querySelector("#add-button")
addButton.addEventListener("click", addBookToLibrary)
