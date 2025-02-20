import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
    return (
        <div className="text-center mt-20">
            <h1 className="text-4xl font-bold text-gray-800">
                404 - Page Not Found
            </h1>
            <p className="text-lg text-gray-600 mt-4">
                The page you are looking for doesn't exist.
            </p>
            <div className="mt-4">
                <Link to="/" className="bg-black text-white py-2 px-4 rounded-xl font-bold">
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
