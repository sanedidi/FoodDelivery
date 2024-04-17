import React from "react";
import { Hero } from "../components/Hero/Hero";
import Filter from "../components/Filters/Filter";
import Products from '../components/Products/Products.jsx'
import Header from "../components/Header/Header.jsx";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Filter />
      <Products />
    </>
  );
};

export default Home;
