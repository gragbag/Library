const addBookButton = document.querySelector(".add-book");
const dialog = document.querySelector("#dialog")
const submitBook = document.querySelector(".submit-book");
const addForm = document.querySelector("#add-form");
const closeForm = document.querySelector("#close-dialog");
const container = document.querySelector(".container");

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
	const read = document.querySelector("#read").value === "true";

	const newBook = new Book(title, author, pages, read, myLibrary.length);
	
	myLibrary.push(newBook);
	displayNewBook(newBook);
}

function displayNewBook(book) {
	const bookCard = document.createElement("div");
	bookCard.className = "book-card";

	const title = document.createElement("h2");
	title.className = "title";
	title.innerText = book.title;
	
	const author = document.createElement("p");
	author.className = "author";
	author.innerText = "Author: " + book.author;

	const pages = document.createElement("p");
	pages.className = "pages";
	pages.innerText = "Number of Pages: " + book.pages;

	const read = document.createElement("p");
	read.className = "read";
	read.innerText = "Have Read: " + book.read;

	const btnContainer = document.createElement("div");
	btnContainer.className = "button-container";

	const readBtn = document.createElement("button");
	readBtn.className = "read-button";
	readBtn.innerText = "Mark As Read";

	const removeBtn = document.createElement("button");
	removeBtn.className = "remove-button";
	removeBtn.innerText = "Remove";

	btnContainer.appendChild(readBtn);
	btnContainer.appendChild(removeBtn);
	
	bookCard.appendChild(title);
	bookCard.appendChild(author);
	bookCard.appendChild(pages);
	bookCard.appendChild(read);
	bookCard.appendChild(btnContainer)

	bookCard.dataset.index = myLibrary.length - 1;

	container.appendChild(bookCard);

	readBtn.addEventListener("click", (e) => {updateReadButton(e)});
	removeBtn.addEventListener("click", (e) => {updateRemoveButton(e)});
}

addBookButton.addEventListener("click", () => {
	dialog.showModal();
});

addForm.addEventListener("submit", (e) => {
	e.preventDefault();
	dialog.close();
	addBookToLibrary();
})

closeForm.addEventListener("click", (e) => {
	e.preventDefault();
	dialog.close();
})

function updateReadButton(e) {
	const index = e.target.parentNode.parentNode.dataset.index;
	const read = myLibrary[index].read === true;
	myLibrary[index].read = !read;
	const readText = e.target.parentNode.parentNode.querySelector(".read");
	readText.innerText = "Have Read: " + !read;
	e.target.innerText = read ? "Mark As Read" : "Mark As Unread";

}

function updateRemoveButton(e) {
	myLibrary.splice(e.target.parentNode.parentNode.dataset.index, 1);
	e.target.parentNode.parentNode.remove();
	updateIndices();
}

function updateIndices() {
	const cards = document.querySelectorAll(".book-card");
	cards.forEach((bookCard, index) => {
		bookCard.dataset.index = index;
	})
}


