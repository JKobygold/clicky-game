import React from "react";
import css from "../app.css";
import hover from"hover.css";
import {useState} from 'react'

export default function Photos() {
   
    const pictures = [
      "/images/1.jpg",
      "/images/1.jpg",
      "/images/3.jpg", 
      "/images/4.jpg" ,
      "/images/5.jpg" ,
      "/images/6.jpg" ,
      "/images/7.jpg" ,
      "/images/8.jpg" ,
      "/images/9.jpg" ,
      "/images/10.jpg",
      "/images/11.jpg",
      "/images/12.jpg",]
    
      function shuffle () {
        pictures.sort(() => Math.random() - 0.5);
      }

const pictureList = pictures.map( ()=>{
  return(
<img src ="{1}"> </img>
)}
);

      function sayHello() {
        shuffle()
      }
     
      
    

    return ( <div>
      <button onClick={sayHello}>
    {pictureList}  
  
     </button>
     </div>);
  
}