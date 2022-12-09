import React from "react"
import Navbar from "./components/Nav"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Data from "./components/Data"



export default function App(){ 
  const cards= Data.map(item =>{
    return (
      <Card 
      {...item}
      />
    )
  }  )




    return(
        <div>
        <Navbar/>
         <Hero/> 
         <div className="card-list" >
         {cards} </div>


        
        </div>
    )
}