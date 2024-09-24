import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="md:flex justify-between items-center md:py-24 md:px-48 p-8 rounded-2xl bg-[#1313130D] mt-8 flex-row-reverse">
            <div className="flex items-center justify-center mb-8">
                <img src="https://m.media-amazon.com/images/I/51UoqRAxwEL.jpg"
                    className="rounded-lg" />
            </div>
            <div className="max-w-[530px]">
                <h2 className="text-5xl mb-6 font-bold">Books to freshen up your bookshelf</h2>
                <Link to="/listedBooks"><button className="btn bg-green-600 text-white">View The List</button></Link>
            </div>
        </div>
    );
};

export default Banner;