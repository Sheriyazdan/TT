import React, { useEffect, useState } from "react";
import "./styles/global.scss";
import Header from "./components/Header";
import AppRoutes from "./components/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";

function App(): JSX.Element {
  return (
    <>
      <Router>
        <Header />
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
