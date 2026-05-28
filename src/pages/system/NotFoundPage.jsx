import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main className="screen">
      <div className="state-card">
        <h2>Page not found</h2>
        <p>The page you requested does not exist.</p>
        <Link className="btn btn-primary" to="/">Back to home</Link>
      </div>
    </main>
  );
}

export default NotFoundPage;
