import React, {Component, useState} from "react";
import '../styles/App.css';
import Card from "./Card"

const App = () => {
  return (
    <div id="main">
    <Card name="E-commerce" desc="A React project to build an e-commerce UI"  />
    <Card name="Weather App" desc="Displays weather using API"  />
    </div>
  )
}


export default App;
