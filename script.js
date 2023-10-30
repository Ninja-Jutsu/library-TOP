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
    var checkBoxInput = document.querySelector("#read");
    
    // Elements creation:
    var readButton = document.createElement("button");
    var div = document.createElement("div")
    var bookName = document.createElement ("p")
    bookName.innerText = bookNameInput.value
    var authorName = document.createElement ("p")
    authorName.innerText = authorNameInput.value
    function fillButtonText () {
        let text = "";
        if (checkBoxInput.checked == true){
            text = readButton.innerText = "Already read"
        }
        else {
            text = readButton.innerText = "Not read yet"
        }
        return text
    }
    fillButtonText ()
    // Add classes to elements:
    div.classList.add("book");

    // append elements:
    div.appendChild(bookName)
    div.appendChild(authorName)
    div.appendChild(readButton)
    main.appendChild(div);

    // extra:
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

