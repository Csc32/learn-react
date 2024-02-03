import React from "react";
import ReactDOM from "react-dom/client";
const appDomElement = document.getElementById("app");

const root = ReactDOM.createRoot(appDomElement);

const button1 = React.createElement("button", { "data-id": 123 }, "Button 1");
const button2 = React.createElement("button", { "data-id": 456 }, "Button 2");
const button3 = React.createElement("button", { "data-id": 789 }, "Button 3");
//group buttons inside div element
const app = React.createElement(React.Fragment, null, [
  button1,
  button2,
  button3,
]);

root.render(app);
