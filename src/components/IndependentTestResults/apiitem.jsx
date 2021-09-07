import { React, useState } from "react";
import axios from "axios";

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
  const { api } = props;
  const [response, setResponse] = useState([]);

  const queryAPI = function (apiInfo) {
    axios({
      method: apiInfo.method,
      url: currentApi.endpointURL + apiInfo.url,
      data: apiInfo.body,
      //   headers: auth["headers"],
    })
      .then((res) => {
        setResponse(res);
        console.log(res);
      })
      .catch((err) => {
        setResponse(err);
        console.log(err);
      });
  };

  return (
    <div className="">
      <p>Api: {api.url}</p>
      <p>Method: {api.method}</p>
      <button
        onClick={() => {
          queryAPI(api);
        }}
      >
        Test
      </button>

      {response.length !== 0 ? <p>{JSON.stringify(response)}</p> : null}
    </div>
  );
}
