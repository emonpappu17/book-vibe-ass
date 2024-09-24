
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData, useParams } from "react-router-dom";
import { getStoredBooks, saveBook } from "../../utility/localstorage";
import { saveWishlist } from "../../utility/localstorage2";


const BookDetails = () => {

    const books = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const book = books.find(book => book.bookId === idInt);
    // console.log(books, idInt, book);
    const { bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating, image } = book;

    const handleRead = () => {
        const storedBookIds = getStoredBooks();

        if (storedBookIds.includes(idInt)) {  // Fixed typo here
            // console.log('You have Already Read this book!');
            toast.warn("You have Already Read this book!")
        }
        else {
            // console.log('Book Added to Read List');
            toast.success("Book Added to Read List")
        }
        saveBook(idInt);
        // console.log(getStoredBooks());
    }

    const handleWishlist = () => {
        const storedBookIds = getStoredBooks();

        if (storedBookIds.includes(idInt)) {  // Fixed typo here
            // console.log('You have Already Read this Books');
            toast.warn("You have Already Read this Books")
        }
        else {
            // console.log('Books Added to WhishList');
            toast.success("Books Added to WhishList")
            saveWishlist(idInt);
        }
    }

    return (
        <div className="lg:flex justify-between gap-6 items-center m-5">
            <div className="bg-[#1313130D] rounded-2xl flex-1 flex justify-center p-11 items-center md:py-10 md:px-5 mb-6">
                <img src={image} className="h-[500px] w-[400px] rounded-2xl" />
            </div>
            <div className="space-y-3">
                <h2 className="text-4xl">{bookName}</h2>
                <p>{author}</p>
                <hr />
                <p>{category}</p>
                <hr />
                <p><span className="font-bold">Review:</span> {review}</p>
                <div className="flex items-center gap-3">
                    <h2>Tag</h2>
                    <ul className='flex gap-3 flex-wrap'>
                        {
                            tags.map((tag, idx) => <li key={idx} className='p-2 bg-[#1313130D] w-fit rounded-full font-semibold text-green-600'>{tag}</li>)
                        }
                    </ul>
                </div>
                <hr />
                <table>
                    <tbody>
                        <tr>
                            <td>Number of Pages:</td>
                            <td className="font-bold pl-8">{totalPages}</td>
                        </tr>
                        <tr>
                            <td>Publisher:</td>
                            <td className="font-bold pl-8">{publisher}</td>
                        </tr>
                        <tr>
                            <td>Year of Publishing:</td>
                            <td className="font-bold pl-8">{yearOfPublishing}</td>
                        </tr>
                        <tr>
                            <td>Rating:</td>
                            <td className="font-bold pl-8">{rating}</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <button onClick={handleRead} className="btn btn-outline btn-success mr-5">Read</button>
                    <button onClick={handleWishlist} className="btn btn-outline btn-primary">Wishlist</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;