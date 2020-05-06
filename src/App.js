import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";

import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
