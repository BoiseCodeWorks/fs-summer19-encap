class Book {
    constructor({title = "", author = "", coverImg: img = "//placehold.it/200x200"}) {
        this.title = title
        this.author = author
        this.coverImg = img
    }
}

export { Book /** Book: class Book */ }