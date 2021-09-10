import { React, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import axios from "axios";

import "./css/nav.css";
import "./css/button.css";

export default function Nav(props) {
  const [user, setUser] = useState();
  const { setToken } = props;
  const login = function () {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.idToken;
        // The signed-in user info.
        const user = result.user;
        // ...

        console.log("credential:", credential);
        console.log("token:", token);
        console.log("user:", user);
        // console.log(localStorage.getItem("rememberMe"));
        setUser(user.email);
        setToken(token);

        //return
        axios
          .post("https://kennedy-dev1.gojitech.systems/api/v1/login", {
            token: token,
            // providerNo: "8",
          })
          .then((res) => {
            console.log(res);
          });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(errorCode, errorMessage, email, credential);
      });
  };

  return (
    <nav>
      <div className="float-left">
        <Link to="/" className="link-item">
          <h1>Test APIs</h1>
        </Link>
        <Link to="/scheduled" className="link-item">
          <h1>Scheduled Results</h1>
        </Link>
      </div>
      {user ? (
        <h1>{user}</h1>
      ) : (
        <button className="link-item login-button" onClick={login}>
          <h1>Login</h1>
        </button>
      )}
    </nav>
  );
}
