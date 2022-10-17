import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Kayaking } from "./components/Kayaking";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Kayaking />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
