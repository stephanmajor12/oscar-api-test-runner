import { React } from "react";

export default function StatusBox(props) {
  const { response } = props;
  if (response) {
    return (
      <div>
        {response.status < 300 ? (
          <h2 className="passes info-box">{response.status} </h2>
        ) : (
          <h2 className="fails info-box">{response.status} </h2>
        )}
      </div>
    );
  } else {
    <div>
      <h2 className="fails info-box">N/A</h2>
    </div>;
  }
}
