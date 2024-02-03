import React from "react";
import ReactDOM from "react-dom/client";
const appDomElement = document.getElementById("app");

const root = ReactDOM.createRoot(appDomElement);
const button = React.createElement("button", { "data-id": 123 }, "Like");

root.render(button);
