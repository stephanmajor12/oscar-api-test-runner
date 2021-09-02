import { React } from "react";
import MenuItem from "./menuitem";

import "../css/menu.css";

export default function Menu(props) {
  const { results } = props;

  return (
    <div className="menu">
      <h1>Oscar API Endpoint Test Results</h1>

      {results.length ? (
        results.map((test) => {
          return <MenuItem key={test.id} test={test} />;
        })
      ) : (
        <h2 className="empty-msg">There's nothing here...</h2>
      )}
    </div>
  );
}
