import { Book } from "../models/Book.js";


let hp = new Book({title: "Harry Potter", author: "JK Rowling", coverImg: "https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg"})
let narnia = new Book({title: "Narnia", author: "Lewis", coverImg: "https://images-na.ssl-images-amazon.com/images/I/51lOSC0wbfL._SX331_BO1,204,203,200_.jpg"})
let lotr = new Book({title: "The Hobbit", author: "Tolkien", coverImg: "https://images-na.ssl-images-amazon.com/images/I/51uLvJlKpNL._SX321_BO1,204,203,200_.jpg"})

let _books = [hp, narnia, lotr]

export default class BookService {
    constructor() {
        console.log('hello from the service');
    }

    get Books() {
        return _books.map(book => new Book(book))
        // let out = []
        // for (let i = 0; i < _books.length; i++) {
        //     let book = _books[i]
        //     let newBook = new Book(book)
        //     out.push(newBook)
        // }
        // return out
    }

}