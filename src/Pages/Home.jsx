import React from "react";
import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import Filter from "../components/Filters/Filter";
import Products from '../components/Products/Products.jsx'

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
