import React from "react";
import ReactDOM from "react-dom/client";
import { createPortal } from "react-dom";
import { Provider, useDispatch } from "react-redux";
import store from "./store/index.js";

import Header from "./sections/Header.jsx";
import Main from "./sections/Main.jsx";
import Aside from "./sections/Aside.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css/bundle";
import "./index.scss";

const main = document.querySelector("main"),
  header = document.querySelector("header"),
  aside = document.querySelector("aside");

ReactDOM.createRoot(main).render(<App />);

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        {createPortal(<Header />, header)}
        <Main />
        {createPortal(<Aside />, aside)}
      </Provider>
    </React.StrictMode>
  );
}
