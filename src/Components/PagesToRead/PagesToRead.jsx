
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getStoredBooks } from '../../utility/localstorage';
import PropTypes from 'prop-types';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
${x + width / 2}, ${y}
C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    // console.log(typeof fill, typeof x, typeof y, typeof width, typeof height);
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
    const books = useLoaderData();
    const [readBooks, setReadBooks] = useState([]);
    // console.log(readBooks);

    useEffect(() => {
        const storedBookIds = getStoredBooks();
        if (Array.isArray(books)) {
            const readBook = books.filter(book => storedBookIds.includes(book.bookId))
            setReadBooks(readBook);
        }
    }, [books]);

    return (
        <div className='flex items-center justify-center md:p-24 p-10 bg-[#1313130D] rounded-2xl mt-8'>
            {/* <h1>pase component</h1> */}
            <BarChart
                width={1000}
                height={500}
                // data={data}
                data={readBooks}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {readBooks.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};


TriangleBar.propTypes = {
    fill: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
};
export default PagesToRead;