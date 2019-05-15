import BookService from "./book-service.js";

let _bookService = new BookService()

function drawBooks() {
    let books = _bookService.Books
    let template = ''
    books.forEach(book => {
        template += `
        <h1 class="book-title">${book.title}</h1>
        `
    })
    document.querySelector('.book-shelf').innerHTML = template
}

export default class BookController {
    constructor() {
        console.log('hello from bc');
    }

    draw() {
        console.log('hit the target');
        drawBooks()
    }
}