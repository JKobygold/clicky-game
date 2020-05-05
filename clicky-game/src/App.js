import React, {useState} from 'react';
import ToDoList from "./componants/photos";
import Navbar from  "./componants/Navbar";
import Jumbotron from './componants/Jumbotron';
import Footer from "./componants/Footer";


function App() {
  return (
    <>
  <Navbar/ >
  <Jumbotron/>
<ToDoList />
<Footer/>
   </>
  )
  
}

export default App;
