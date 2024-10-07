const addBookButton = document.querySelector(".add-book");
const dialog = document.querySelector("#dialog")


const myLibrary = [];

function Book() {

}

function addBookToLibrary() {
	dialog.showModal();
}


addBookButton.addEventListener("click", addBookToLibrary);