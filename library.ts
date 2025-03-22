// Abstract Book class
abstract class Book {
    constructor(public title: string, public author: string, public isbn: string) {}
    
    abstract getCategory(): string;
}

// Subclasses for different book categories
class Fiction extends Book {
    getCategory(): string {
        return "Fiction";
    }
}

class NonFiction extends Book {
    getCategory(): string {
        return "Non-Fiction";
    }
}

// Library Member class
class Member {
    private borrowedBooks: Book[] = [];
    
    constructor(public name: string, public memberId: number) {}
    
    borrowBook(book: Book): void {
        this.borrowedBooks.push(book);
        console.log(`${this.name} borrowed "${book.title}".`);
    }
    
    returnBook(book: Book): void {
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1);
            console.log(`${this.name} returned "${book.title}".`);
        } else {
            console.log(`${this.name} has not borrowed "${book.title}".`);
        }
    }
    
    listBorrowedBooks(): void {
        console.log(`\n${this.name}'s Borrowed Books:`);
        this.borrowedBooks.forEach(book => {
            console.log(`- ${book.title} (${book.getCategory()})`);
        });
    }
}

// Library class
class Library {
    private books: Book[] = [];
    
    addBook(book: Book): void {
        this.books.push(book);
        console.log(`Added "${book.title}" to the library.`);
    }
    
    listBooks(): void {
        console.log("\nLibrary Books:");
        this.books.forEach(book => {
            console.log(`- ${book.title} by ${book.author} (${book.getCategory()})`);
        });
    }
}

const library = new Library();
const member = new Member("Alice", 101);

const book1 = new Fiction("The Hobbit", "J.R.R. Tolkien", "12345");
const book2 = new NonFiction("Sapiens", "Yuval Noah Harari", "67890");

library.addBook(book1);
library.addBook(book2);
library.listBooks();

member.borrowBook(book1);

member.listBorrowedBooks();
member.returnBook(book1);