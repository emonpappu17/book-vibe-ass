import PropTypes from 'prop-types';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';



const Book = ({ book }) => {
    // console.log(Array.isArray(book));

    const { bookId, image, bookName, author, category, rating, tags } = book;
    
    return (
        <Link to={`/book/${bookId}`}>
            <div className='md:space-y-3 space-y-2 border rounded-3xl md:p-7 p-2 flex flex-col justify-between'>
                <div className='md:py-7  bg-[#1313130D] rounded-2xl p-11 flex justify-center items-center'>
                    <img src={image} alt="" className='rounded-2xl max-h-[250px]' />
                </div>
                <div className='md:space-y-3 space-y-2'>
                    <ul className='flex gap-3 flex-wrap'>
                        {
                            tags.map((tag, idx) => <li key={idx} className='p-2 bg-[#1313130D] w-fit rounded-full font-semibold text-green-600'>{tag}</li>)
                        }
                    </ul>
                    <h2>{bookName}</h2>
                    <p>By: {author}</p>
                    <hr className='border-dashed' />
                    <div className='flex justify-between'>
                        <h3>{category}</h3>
                        <span className='flex items-center gap-1'>{rating} <FaRegStar></FaRegStar></span>
                    </div>
                </div>
            </div>
        </Link>
    );
};


Book.propTypes = {
    book: PropTypes.object
};
export default Book;