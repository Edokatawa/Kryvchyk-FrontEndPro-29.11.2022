import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import {BrowserRouter as Router} from "react-router-dom";
import {PORTAL_HOLDER_ID} from "./constants";

const root = ReactDOM.createRoot(document.getElementById("root"));

const portalHolder = document.createElement("div");
portalHolder.id = PORTAL_HOLDER_ID;
document.body.append(portalHolder);

root.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>
);
