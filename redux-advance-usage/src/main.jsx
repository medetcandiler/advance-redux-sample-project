import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import { fetchUsers } from "./app/features/user/usersSlice.js";

function Main() {
  const dispatch = store.dispatch;
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}

store.dispatch(fetchUsers());

ReactDOM.createRoot(document.getElementById("root")).render(
  <Main />
);
