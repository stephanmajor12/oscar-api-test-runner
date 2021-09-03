import { React } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to="/">
        <h1>Test APIs</h1>
      </Link>
      <Link to="/scheduled">
        <h1>Scheduled Results</h1>
      </Link>
    </nav>
  );
}
