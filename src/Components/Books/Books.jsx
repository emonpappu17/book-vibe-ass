import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books, setBooks] = useState([]);
    // console.log(books);

    useEffect(() => {
        fetch('Books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div className="p-4">
            <h3 className="text-center mb-7 text-6xl font-semibold">Books</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;