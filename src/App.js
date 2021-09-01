import { React, useState, useEffect } from "react";
import Menu from "./components/menu";

import "./firebase"; // initialization
import {
  collection,
  query,
  orderBy,
  getFirestore,
  onSnapshot,
} from "firebase/firestore";

function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const q = query(
      collection(db, "test-results"),
      orderBy("timestamp", "desc")
    );
    setLoading(true);
    onSnapshot(q, (docs) => {
      const items = [];

      docs.forEach((doc) => {
        items.push(doc.data());
      });
      setResults(items);
    });
    setLoading(false);
  }, []);

  if (loading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div>
      <Menu results={results} />
    </div>
  );
}

export default App;
