import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function ShowMessage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 20);
  });

  return <p>This message has been displayed {count} times!</p>;
}
