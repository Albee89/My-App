import { useState } from "react";

function Button() {
 const [label, setLabel] = useState("Press to stop");
  return (
    <div>
      <h1>{label}!</h1>
      <button type="button" onClick={() => setLabel("Stopped")}>Stop</button>
    </div>
  );
}