import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    // console.error(error);
    
    return (
        <div className="flex items-center justify-center h-screen">
            <div>
                <h2 className="text-5xl text-center mb-6"><i>Oops!!!!</i></h2>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
                <Link to="/"><button className="btn btn-primary mt-6">Go Back Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;