import React from "react";
import css from "../app.css";
import hover from"hover.css";
import {useState} from 'react'


  // function below is from: https://stackoverflow.com/a/6274381
function shuffle(a) {
  a = [...a]
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function Photos() {
   
    const initialImages = [
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

      const [images, setImages] = useState(initialImages)
      const [clickedImages, setClickedImages] = useState({})
      const [score, setScore] = useState(0)
      const [highScore, setHighScore] = useState(0)


      const gameOver = won => {
        if (won) {
            alert('You won!')
        } else {
            alert('You lost!')
        }
        setImages([...initialImages])
        setClickedImages({})
        setScore(0)
    }

    return (
        <div className="App">  
        
       <h1 > Current score: {score}</h1>
        <br />
        <h1> High score: {highScore}</h1> 
       <br />

            {images.map(PhotoNew =>
                <img
                    src={PhotoNew}
                    class={"hvr-pulse-grow"}
                    style={{width: 200, height: 200}}
                    key={PhotoNew}
                    alt={PhotoNew}
                    onClick={() => {
                        if (clickedImages[PhotoNew]) {
                            return gameOver(false)
                        }
                        setClickedImages({
                            ...clickedImages,
                            [PhotoNew]: true
                        })
                        const newScore = score + 1
                        setScore(newScore)
                        if (newScore > highScore) {
                            setHighScore(newScore)
                        }
                        setImages(shuffle(images))
                        if (newScore >= 12) {
                            return gameOver(true)
                        }
                    }}
                />
            )}
        </div>
    );
}