import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./reducers/posts";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

const theme = createTheme();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);
