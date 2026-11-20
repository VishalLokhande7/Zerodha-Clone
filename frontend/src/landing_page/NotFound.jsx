import { Link } from "react-router";

function NotFound() {
  return (
    <div className="container text-center mt-5">
      <div className="alert alert-danger" role="alert">
        <h1 className="text-danger">404 Not Found</h1>

        <p className="mt-3">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link to="/" className="btn btn-danger">
          ← Go to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;