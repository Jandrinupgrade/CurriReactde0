import React from "react";
import ReactDOM from "react-dom/client";
import "./languages/i18n";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store";
import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Router>
);
