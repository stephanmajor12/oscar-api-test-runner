import { React } from "react";
import MenuItem from "./menuitem";

import "./css/menu.css";
import Loader from "react-loader-spinner";

export default function Menu(props) {
  const { results } = props;

  return (
    <div className="menu">
      <h1>Oscar API Scheduled Test Results</h1>

      {results.length ? (
        results.map((test) => {
          return <MenuItem key={test.id} test={test} />;
        })
      ) : (
        <Loader
          className="loader"
          type="TailSpin"
          color="rgb(0, 0, 0)"
          height={90}
          width={90}
        />
      )}
    </div>
  );
}
