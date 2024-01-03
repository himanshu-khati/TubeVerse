import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "material-icons/iconfont/material-icons.css";
import reportWebVitals from "./reportWebVitals";
import { appRouter } from "./App";
import { Provider } from "react-redux";
import store from "./components/utils/store";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
); 

reportWebVitals();
