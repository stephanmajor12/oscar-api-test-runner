import { React, useState, useEffect } from "react";
import "../css/menuitem.css";

export default function MenuItem(props) {
  const { test } = props;
  const [showMenu, setShowMenu] = useState(false);
  const [passFails, setPassFails] = useState({});

  useEffect(() => {
    let passes = 0;
    let fails = 0;
    test.results.forEach((res) => {
      if (res.status >= 200 && res.status < 300) {
        passes++;
      } else if (res.status >= 300) {
        fails++;
      }
    });
    setPassFails({ passes, fails });
  }, [test]);

  return (
    <div key={test.id} className="menu-item">
      <button
        className="button-menu"
        onClick={() => {
          showMenu ? setShowMenu(false) : setShowMenu(true);
        }}
      >
        <h2>{new Date(test.timestamp.seconds * 1000).toLocaleString()}</h2>
        <div className="pass-fail-container">
          <h2 className="passes info-box">Passes: {passFails.passes} </h2>
          <h2 className="fails info-box">Fails: {passFails.fails} </h2>
        </div>
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
