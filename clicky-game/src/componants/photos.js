import React, {Component} from "react";
import css from "../app.css";
import hover from"hover.css";

class Photos extends Component{
  state= {
    count:0
  }

render() {
  return (
    <div class ="container">
      <img class="1 hvr-pulse-grow" src="/images/1.jpg" />
      <img class="2 hvr-pulse-grow" src="/images/2.jpg" alt ="bird" />
      <img class="3 hvr-pulse-grow" src="/images/3.jpg" alt ="bird"/>
      <img class="4 hvr-pulse-grow" src="/images/4.jpg" alt ="bird"/>
      <img class="5 hvr-pulse-grow" src="/images/5.jpg" alt ="bird"/>
      <img class="6 hvr-pulse-grow" src="/images/6.jpg" alt ="bird"/>
      <img class="7 hvr-pulse-grow" src="/images/7.jpg" alt ="bird"/>
      <img class="8 hvr-pulse-grow" src="/images/8.jpg" alt ="bird"/>
      <img class="9 hvr-pulse-grow" src="/images/9.jpg" alt ="bird"/>
      <img class="10 hvr-pulse-grow" src="/images/10.jpg"alt ="bird"/>
      <img class="11 hvr-pulse-grow" src="/images/11.jpg"alt ="bird"/>
      <img class="12 hvr-pulse-grow" src="/images/12.jpg"alt ="bird"/>
    </div>
  )
  }
}
