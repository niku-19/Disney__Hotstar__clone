import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./Components/Login/Login";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Details from "./Components/Details/Details";
function App() {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<Login/>} />
      </Routes>
    </>
  );
}

export default App;
