import { React } from "react";
import MenuItem from "./menuitem";

import "../css/menu.css";

export default function Menu(props) {
  const { results } = props;

  return (
    <div className="menu">
      <h1 className="title">Oscar API Results</h1>

      {results.map((test) => {
        return <MenuItem key={test.id} test={test} />;
      })}
    </div>
  );
}
