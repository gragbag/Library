const addBookButton = document.querySelector(".add-book");
const dialog = document.querySelector("#dialog")
const submitBook = document.querySelector(".submit-book");
const addForm = document.querySelector("#add-form");


const myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function addBookToLibrary() {
	const title = document.querySelector("#title").value;
	const author = document.querySelector("#author").value || "N/A";
	const pages = document.querySelector("#pages").value;
	const read = document.querySelector("#read").value;

	const newBook = new Book(title, author, pages, read);
	
}

addBookButton.addEventListener("click", () => {
	dialog.showModal();
});

submitBook.addEventListener("click", (e) => {
	e.preventDefault();
	dialog.close();
	addBookToLibrary();
})