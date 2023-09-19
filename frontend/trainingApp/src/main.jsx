import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TrainingContext } from "./context/UseContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TrainingContext>
      <App />
    </TrainingContext>
  </React.StrictMode>
);
