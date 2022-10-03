import React from "react";
import './App.css';
import Header from "./componentes/Header/Header";
import { ItemListContainer } from "./componentes/Header/containers/ItemListContainer"

const App = () => {
  const mensaje= "Descubri las mejores ofertas"
 return (
    <>
     <Header/>
     <ItemListContainer greeting={mensaje}/>  
    </>
  )
}

export default App;
