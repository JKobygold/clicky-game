import React, {useState} from 'react';
import Photos from "./componants/Photos";
import Navbar from  "./componants/Navbar";
import Jumbotron from './componants/Jumbotron';
import Footer from "./componants/Footer";


function App() {
  return (
    <>
  <Navbar/ >
  <Jumbotron/>
  <Photos/>
<Footer/>
   </>
  )
  
}

export default App;
