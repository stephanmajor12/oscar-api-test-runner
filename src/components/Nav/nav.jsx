import { React } from "react";
import { Link } from "react-router-dom";

import "./css/nav.css";

export default function Nav() {
  return (
    <nav>
      <Link to="/" className="link-item">
        <h1>Test APIs</h1>
      </Link>
      <Link to="/scheduled" className="link-item">
        <h1>Scheduled Results</h1>
      </Link>
    </nav>
  );
}
