/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Header";

const Login = () => {
  return (
    <div className="login">
      <h2>Login</h2>
    </div>
  );
};

const Guides = () => {
  return (
    <div className="guides">
      <h2>Guides</h2>
    </div>
  );
};

const Home = () => {
  return (
    <div className="home">
      <h2>Home</h2>
    </div>
  );
};

const Main = () => {
  return (
    <div className="main">
      <Home />
      <Guides />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
