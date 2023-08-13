import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import rootResucer from "./reducer/index.ts";

const store = createStore(rootResucer);

console.log("store.getState: ", store.getState());

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
