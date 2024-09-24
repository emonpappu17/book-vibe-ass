import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBooks } from '../../utility/localstorage';
import { useEffect, useState } from 'react';
import ReadBook from '../ReadBook/ReadBook';
import { getStoredWishlist } from '../../utility/localstorage2';
import WishlistBooks from '../WishlistBooks/WishlistBooks';

const ListedBooks = () => {

    const books = useLoaderData();
    // const [readBooks, setReadBooks] = useState([]);
    const [wishlistBooks, setWishlistBooks] = useState([]);
    const [displayBooks, setDisplayBooks] = useState([]);
    // console.log(books, readBooks);

    const handleSort = filter => {
        if (filter === 'rating') {
            const ratingSort = [...displayBooks].sort(function (a, b) { return b.rating - a.rating })
            const ratingSortWish = [...wishlistBooks].sort(function (a, b) { return b.rating - a.rating })
            setDisplayBooks(ratingSort);
            setWishlistBooks(ratingSortWish);
        }
        else if (filter === 'page') {
            const ratingSort = [...displayBooks].sort(function (a, b) { return b.totalPages - a.totalPages })
            const ratingSortWish = [...wishlistBooks].sort(function (a, b) { return b.totalPages - a.totalPages })
            setDisplayBooks(ratingSort);
            setWishlistBooks(ratingSortWish);
        }
        else if (filter === 'year') {
            const ratingSort = [...displayBooks].sort(function (a, b) { return b.yearOfPublishing - a.yearOfPublishing })
            const ratingSortWish = [...wishlistBooks].sort(function (a, b) { return b.yearOfPublishing - a.yearOfPublishing })
            setDisplayBooks(ratingSort);
            setWishlistBooks(ratingSortWish);
        }
    }
    // console.log(displayBooks);

    useEffect(() => {
        const storedBookIds = getStoredBooks();
        if (Array.isArray(books)) {
            const readBook = books.filter(book => storedBookIds.includes(book.bookId))
            // setReadBooks(readBook);
            setDisplayBooks(readBook);
        }
    }, [books]);

    useEffect(() => {
        const storedBookIds = getStoredWishlist();
        if (Array.isArray(books)) {
            const wishlistBooks = books.filter(book => storedBookIds.includes(book.bookId))
            setWishlistBooks(wishlistBooks);
        }
    }, [books]);

    return (
        <div className='space-y-8 mt-5'>
            <div className='flex justify-center items-center bg-[#1313130D] rounded-2xl py-10 font-extrabold text-2xl'>
                <h3>Books</h3>
            </div>
            <div className='flex items-center justify-center'>
                <details className="dropdown">
                    <summary className="btn m-1 bg-green-600 text-white">Sort By</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li onClick={() => handleSort('rating')}><a>Rating</a></li>
                        <li onClick={() => handleSort('page')}><a>Number of pages</a></li>
                        <li onClick={() => handleSort('year')}><a>Publisher year</a></li>
                    </ul>
                </details>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>
                <TabPanel>
                    <div className='space-y-6 mt-8'>
                        {
                            displayBooks.map(book => <ReadBook key={book.bookId} book={book}></ReadBook>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='space-y-6 mt-8'>
                        {
                            wishlistBooks.map(book => <WishlistBooks key={book.bookId} book={book}></WishlistBooks>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;

