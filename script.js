const addBookButton = document.querySelector(".add-book");
const dialog = document.querySelector("#dialog")
const submitBook = document.querySelector(".submit-book");
const addForm = document.querySelector("#add-form");
const container = document.querySelector(".container");
const markReadBtn = document.querySelector(".read-button");
const removeBtn = document.querySelector(".remove-button");


const myLibrary = [];

function Book(title, author, pages, read, index) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.index = index;
}

function addBookToLibrary() {
	const title = document.querySelector("#title").value;
	const author = document.querySelector("#author").value || "N/A";
	const pages = document.querySelector("#pages").value;
	const read = document.querySelector("#read").value;

	const newBook = new Book(title, author, pages, read, myLibrary.length);
	console.log(newBook);
	
	myLibrary.push(newBook);
	displayBooks();
}

function displayBooks() {
	myLibrary.forEach((book) => {
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

		container.appendChild(bookCard);
	})
}

addBookButton.addEventListener("click", () => {
	dialog.showModal();
});

submitBook.addEventListener("click", (e) => {
	e.preventDefault();
	dialog.close();
	addBookToLibrary();
	addForm.reset();
})