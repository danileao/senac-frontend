import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";

import { UserProvider } from "./components/Context/UserContext";

import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
