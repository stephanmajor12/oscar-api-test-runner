import { React, useCallback, useEffect, useState } from "react";
import axios from "axios";
import StatusBox from "../statusbox";
import "./css/listitem.css";

const apiVersion = [
  {
    apitype: "dev",
    endpointURL: "https://kennedy-dev1.gojitech.systems",
  },
  {
    apitype: "staging",
    endpointURL: "https://kennedy-dev2.gojitech.systems",
  },
];
// switch here to change from dev to staging
const currentApi = apiVersion[0];

export default function ApiItem(props) {
  const { api, callBack } = props;
  const [response, setResponse] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  // use callback so that component doesn't re-render
  // when callback gets registered
  const queryAPI = useCallback(() => {
    axios({
      method: api.method,
      url: currentApi.endpointURL + api.url,
      data: api.body,
      //   headers: auth["headers"],
    })
      .then((res) => {
        setResponse(res);
        console.log(res);
      })
      .catch((err) => {
        setResponse(err.response);
        console.log(err);
      })
      .then(() => {
        setShowMenu(true);
      });
  }, [api]);

  useEffect(() => {
    callBack(queryAPI);
  }, [callBack, queryAPI]);

  return (
    <div className="list-item">
      <button
        className="button-menu"
        onClick={() => {
          showMenu ? setShowMenu(false) : setShowMenu(true);
        }}
      >
        <div className="button-contents">
          <h2>{api.url}</h2>
          <div className="pass-fail-container">
            <StatusBox response={response} />
          </div>
        </div>
      </button>

      {showMenu ? (
        <div className="test-options">
          <p>Method: {api.method}</p>
          <button
            onClick={() => {
              setResponse([]);
              queryAPI(api);
            }}
          >
            Test
          </button>
          <div>
            <p>Status: {JSON.stringify(response.status)}</p>
            <p>Response: {JSON.stringify(response)}</p>
            <p>Data: {JSON.stringify(response.data)}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
