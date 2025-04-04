import { useState } from "react";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  function showAlert(message, type) {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  function toogleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#121212"; // Dark background
      document.body.style.color = "#ffffff"; // White text
      showAlert("Dark mode has been enabled", "Success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#ffffff"; // Light background
      document.body.style.color = "#000000"; // Black text
      showAlert("Light mode has been enabled", "Success");
      document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <BrowserRouter>
      <div>
        <Navbar title="TextUtils" mode={mode} toogleMode={toogleMode} />
        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>

            {/* exact do complete match */}
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter text to analyze below" />} />
            <Route exact path="/About" element={<About />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
