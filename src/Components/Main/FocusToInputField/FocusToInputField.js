import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function FocusToInputField() {
  const inputField = useRef(null);
  const onButtonClick = () => {
    inputField.current.focus();
  };
  return (
    <>
      <input ref={inputField} type="text" />
      <button onClick={onButtonClick}>Focus the input field</button>
    </>
  );
}