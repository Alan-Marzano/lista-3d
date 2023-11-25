'use client'
import { useState } from "react";

function InputArea(props) {
  
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (

    <div className="formulario">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span>Añadir</span>
      </button>
    </div>
  );
}

export default InputArea;