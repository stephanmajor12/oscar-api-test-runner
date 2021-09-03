import { React, useState } from "react";
import Loader from "react-loader-spinner";
import "./css/menuitem.css";

export default function MenuItem(props) {
  const { test } = props;
  const [showMenu, setShowMenu] = useState(false);

  if (test.results.length === 0) {
    return (
      <Loader
        className="loading-results"
        type="Bars"
        color="rgb(0, 0, 0)"
        height={35}
        width={35}
      />
    );
  } else {
    return (
      <div key={test.id} className="menu-item">
        <button
          className="button-menu"
          onClick={() => {
            showMenu ? setShowMenu(false) : setShowMenu(true);
          }}
        >
          {test.results.length === 0 ? (
            <Loader
              className="loading-results"
              type="Bars"
              color="rgb(0, 0, 0)"
              height={35}
              width={35}
            />
          ) : (
            <div className="button-contents">
              <h2>
                {new Date(test.timestamp.seconds * 1000).toLocaleString()}
              </h2>
              <div className="pass-fail-container">
                <h2 className="passes info-box">Passes: {test.passes} </h2>
                <h2 className="fails info-box">Fails: {test.fails} </h2>
              </div>
            </div>
          )}
        </button>
        {showMenu ? (
          <div className="result-box">
            {test.results.map((result) => (
              <div key={result.id} className="result-item">
                <hr />
                <div>
                  <p>
                    <b>API URL: </b>
                    {result.apiURL}
                  </p>
                  <div>
                    <h4>{result.method}</h4>
                    {result.status < 300 ? (
                      <h4 className="passes info-box">{result.status}</h4>
                    ) : (
                      <h4 className="fails info-box">{result.status}</h4>
                    )}
                  </div>
                </div>
                <p>
                  <b>API Type:</b> {result.apiType}
                </p>
                <p>
                  <b>Endpoint URL: </b>
                  {result.endpointURL}
                </p>
                <p>
                  <b>Date: </b>
                  {new Date(result.timestamp.seconds * 1000).toLocaleString()}
                </p>
                <p>
                  <b>Data: </b>
                  {result.data.msg}
                </p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}
