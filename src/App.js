import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "./COMPONENT/Banner";
import Menu from "./COMPONENT/Menu";
import "./App.css"
import Couple from "./COMPONENT/Couple";


export default function App(){

  return(
    <>
      <Banner />
      <Menu />
      <Couple />
    </>
  )
}