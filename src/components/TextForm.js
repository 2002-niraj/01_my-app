import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter your text");
  const [mystyle, setstyle] = useState({});
  const [btnText, setBtnText] = useState("Light");
  const [btnStyle, setBtnStyle] = useState({
    color: "black",
    backgroundColor: "white",
    borderColor: "black",
    borderStyle: "solid",
    fontWeight: "bold"
  });

  function handleClick() {
    setText(text.toUpperCase());
  }

  function handleClickToLower() {
    setText(text.toLowerCase());
  }

  function handleClickToClearAll() {
    setText("");
  }
  function handleChange(e) {
    setText(e.target.value);
  }

  function changeMode() {
    if (btnStyle.color == "black") {
      setstyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnStyle({
        color: "white",
        backgroundColor: "black",
        borderColor: "white",
        borderStyle: "solid",
      });
      setBtnText("Dark");
    } else {
      setstyle({});
      setBtnStyle({
        color: "black",
        backgroundColor: "white",
        borderColor: "black",
        borderStyle: "solid",
      });
      setBtnText("light");
    }
  }
  return (
    <>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          style={mystyle}
          id="mybox"
          rows="7"
          value={text}
          onChange={handleChange}
        >
          {" "}
        </textarea>
      </div>
      <button className="btn btn-primary mx-2" style={{ fontWeight: "bold" }} onClick={handleClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-2" style={{ fontWeight: "bold" }} onClick={handleClickToLower}>
        Convert to Lowercase
      </button>
      <button className="btn btn-danger mx-2" style={{ fontWeight: "bold" }} onClick={handleClickToClearAll}>
        Clear All
      </button>
      <button
        type="button"
        className="btn"
        
        style={btnStyle}
        onClick={changeMode}
      >
        {btnText}
      </button>

      <div className="container my-3">
        <h2>Your text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
