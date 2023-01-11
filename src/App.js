//With The help of useRef we can access DOM element directly.

import "./styles.css";
import { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

export default function App() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      1)With The help of useRef we can access DOM element directly.
      <div>
        <p></p>
      </div>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
      <br />
      <br />
      <br />
      <Refo />
    </>
  );
}

/*
By clicking the button,
the input field will get focus.
*/

// useRef create mutable variable which will not rerender the component

function Refo() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <div>
        <p>
          2) useRef create mutable variable which will not rerender the
          component
        </p>
      </div>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}
