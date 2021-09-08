import { React } from "react";

export default function StatusBox(props) {
  const { response } = props;
  return (
    <div>
      {response.status < 300 ? (
        <h2 className="passes info-box">{response.status} </h2>
      ) : (
        <h2 className="fails info-box">{response.status} </h2>
      )}
    </div>
  );
}
