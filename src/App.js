import React from "react";
import './App.css';

import {
  Blog,
  Feature,
  Footer,
  Possibility,
  WhatGpt3,
  Header,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";


const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGpt3/>
      <Feature/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  );
};

export default App;
