import React from "react";
import Banner from "./Banner/Banner";
import Movies from "./Movies/Movies";
import NavBar from "./NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favourites from "./Favourites";

const Home = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Movies />
            </>
          }
        ></Route>
         <Route
          path="/favourites"
          element={
            <Favourites/>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Home;