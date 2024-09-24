import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { MdOutlineContactPage } from "react-icons/md";
import { Link } from 'react-router-dom';


const WishlistBooks = ({ book }) => {
    // console.log(book);
    const { image, bookName, author, category, tags, totalPages, publisher, yearOfPublishing, rating, bookId } = book;
    return (
        <div className='border rounded-3xl p-6 md:flex items-center gap-6 '>
            <div className='bg-[#1313130D] rounded-2xl py-7 px-10 flex items-center justify-center'>
                <img src={image} alt="" className='max-h-[200px]' />
            </div>
            <div className='space-y-4'>
                <h2>{bookName}</h2>
                <p>By: {author}</p>
                <div className="flex items-center gap-3 flex-wrap">
                    <h2>Tag</h2>
                    <ul className='flex gap-3 flex-wrap'>
                        {
                            tags.map((tag, idx) => <li key={idx} className='p-2 bg-[#1313130D] w-fit rounded-full font-semibold text-green-600'>{tag}</li>)
                        }
                        <p className='flex items-center gap-2'><CiLocationOn className='text-lg'></CiLocationOn><span>Year of Publishing: {yearOfPublishing}</span></p>
                    </ul>
                </div>
                <div className='flex gap-6 flex-wrap'>
                    <p className='flex items-center gap-2'><FiUsers></FiUsers><span>Publisher: {publisher}</span></p>
                    <p className='flex items-center gap-2'><MdOutlineContactPage></MdOutlineContactPage><span>Page: {totalPages}</span></p>
                </div>
                <hr />
                <div className='flex gap-4 flex-wrap'>
                    <div className='py-2 px-4 bg-green-600 w-fit rounded-full text-white'>
                        Rating: {rating}
                    </div>
                    <div className='py-2 px-4 bg-green-600 w-fit rounded-full text-white'>
                        Category: {category}
                    </div>
                    <div className='py-2 px-4 bg-green-600 w-fit rounded-full text-white'>
                        <Link to={`/book/${bookId}`}>
                            <button>View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

WishlistBooks.propTypes = {
    book: PropTypes.object
};
export default WishlistBooks;