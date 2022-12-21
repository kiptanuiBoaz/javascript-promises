import React, { useState, useEffect, useRef } from "react"
import { MemoApp } from "./components/MemoApp";
// import logo from './logo.svg';

import './App.css';

function App() {


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const inputRef = useRef();

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return (window.removeEventListener("resize", handleResize))

  }, [])

  return (
    <div className="App">

      <input ref={inputRef} ></input>
      <button onClick={() => { inputRef.current.focus() }}>Focus</button>

      <p><span>{windowWidth}</span></p>
      <MemoApp/>
    </div>
  );
}

export default App;
