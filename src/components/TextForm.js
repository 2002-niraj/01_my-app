import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter your text");
  const [mystyle, setstyle] = useState({});
  const [btnText, setBtnText] = useState("Text Light Mode");
  const [btnStyle, setBtnStyle] = useState({
    color: "black",
    backgroundColor: "white",
    borderColor: "black",
    borderStyle: "solid",
    fontWeight: "bold",
  });

  function handleClick() {
    if(text.trim()){
      setText(text.toUpperCase());
      props.showAlert(
        "Converted to UpperCase",
        "Success"
      )
    }
  }

  function handleClickToLower() {
  if(text.trim()){
    setText(text.toLowerCase());
    props.showAlert(
      "Converted to LowerCase",
      "Success"
    )
  }
  }

  function handleClickToClearAll() {
  if(text.trim()){
    setText("");
    props.showAlert(
      "All text has been cleared!",
      "Success"
    )
  }
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
        fontWeight: "bold",
      });
      setBtnText("Text Dark Mode");
    } else {
      setstyle({});
      setBtnStyle({
        color: "black",
        backgroundColor: "white",
        borderColor: "black",
        borderStyle: "solid",
        fontWeight: "bold",
      });
      setBtnText("Text Light Mode");
    }
  }

  function handleClickToCapitalize() {
     if(text.trim()){
      let formatedString = text
      .trim()
      .split(".")
      .map((ele) => {
        ele = ele.trim();
        return ele.charAt(0).toUpperCase() + ele.slice(1);
      });

    setText(formatedString.join(". "));
    props.showAlert(
      "Sentences capitalized successfully!",
      "Success"
    )
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
      <button
        className="btn btn-primary mx-2 my-2"
        style={{ fontWeight: "bold" }}
        onClick={handleClick}
      >
        Convert to Uppercase
      </button>
      <button
        className="btn btn-primary mx-2 my-2"
        style={{ fontWeight: "bold" }}
        onClick={handleClickToLower}
      >
        Convert to Lowercase
      </button>
      <button
        className="btn btn-danger mx-2 my-2"
        style={{ fontWeight: "bold" }}
        onClick={handleClickToClearAll}
      >
        Clear All
      </button>
      <button
        type="button"
        className="btn mx-2 my-2"
        style={btnStyle}
        onClick={changeMode}
      >
        {btnText}
      </button>
      <button
        className="btn btn-primary mx-2 my-2"
        style={{ fontWeight: "bold" }}
        onClick={handleClickToCapitalize}
      >
        Capitalize Sentences
      </button>

      <div className="container my-3 my-2">
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
