import errorImage from "../assets/page-not-found.png";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src={errorImage}
        alt="Error Illustration"
        className="max-w-full h-auto mb-8"
      />
      <h1 className="text-3xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="text-lg mb-8">
        We're sorry, but it seems like there was an error. Please try again
        later.
      </p>
      <Link to="/" className="text-blue-500 text-lg">
        Go back to the home page
      </Link>
    </div>
  );
};

export default ErrorPage;
