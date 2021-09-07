import { React, useState, useEffect } from "react";
import "./firebase"; // initialization
import {
  collection,
  query,
  orderBy,
  getFirestore,
  onSnapshot,
} from "firebase/firestore";

import Menu from "./menu";

function ScheduledResults() {
  const [results, setResults] = useState([]);

  // Load realtime updates from firebase and put them in state
  useEffect(() => {
    const db = getFirestore();
    const q = query(
      collection(db, "test-results"),
      orderBy("timestamp", "desc")
    );
    onSnapshot(q, (docs) => {
      const items = [];

      docs.forEach((doc) => {
        items.push(doc.data());
      });
      setResults(items);
    });
  }, []);

  return (
    <div>
      <Menu results={results} />
    </div>
  );
}

export default ScheduledResults;
