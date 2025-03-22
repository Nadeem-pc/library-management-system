var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Abstract Book class
var Book = /** @class */ (function () {
    function Book(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
    return Book;
}());
// Subclasses for different book categories
var Fiction = /** @class */ (function (_super) {
    __extends(Fiction, _super);
    function Fiction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Fiction.prototype.getCategory = function () {
        return "Fiction";
    };
    return Fiction;
}(Book));
var NonFiction = /** @class */ (function (_super) {
    __extends(NonFiction, _super);
    function NonFiction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NonFiction.prototype.getCategory = function () {
        return "Non-Fiction";
    };
    return NonFiction;
}(Book));
// Library Member class
var Member = /** @class */ (function () {
    function Member(name, memberId) {
        this.name = name;
        this.memberId = memberId;
        this.borrowedBooks = [];
    }
    Member.prototype.borrowBook = function (book) {
        this.borrowedBooks.push(book);
        console.log("".concat(this.name, " borrowed \"").concat(book.title, "\"."));
    };
    Member.prototype.returnBook = function (book) {
        var index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1);
            console.log("".concat(this.name, " returned \"").concat(book.title, "\"."));
        }
        else {
            console.log("".concat(this.name, " has not borrowed \"").concat(book.title, "\"."));
        }
    };
    Member.prototype.listBorrowedBooks = function () {
        console.log("\n".concat(this.name, "'s Borrowed Books:"));
        this.borrowedBooks.forEach(function (book) {
            console.log("- ".concat(book.title, " (").concat(book.getCategory(), ")"));
        });
    };
    return Member;
}());
// Library class
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
        console.log("Added \"".concat(book.title, "\" to the library."));
    };
    Library.prototype.listBooks = function () {
        console.log("\nLibrary Books:");
        this.books.forEach(function (book) {
            console.log("- ".concat(book.title, " by ").concat(book.author, " (").concat(book.getCategory(), ")"));
        });
    };
    return Library;
}());
var library = new Library();
var member = new Member("Alice", 101);
var book1 = new Fiction("The Hobbit", "J.R.R. Tolkien", "12345");
var book2 = new NonFiction("Sapiens", "Yuval Noah Harari", "67890");
library.addBook(book1);
library.addBook(book2);
library.listBooks();
member.borrowBook(book1);
member.listBorrowedBooks();
member.returnBook(book1);
