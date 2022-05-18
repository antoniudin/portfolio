import logo from './logo.svg';
import './App.css';
import index from '../src/style/index.sass'
import Menu from './Menu';
import { useEffect, useState } from 'react';


function App() {

  var x = 0
  var y = 500
  var prevScrollpos = window.pageYOffset;

  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("menu").style.top = "0";
    } else {
      document.getElementById("menu").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
    if (currentScrollPos>60) {
      y++
      console.log(y)
      document.getElementById("line").style.width = 5
    }
    
  }
  
  useEffect (()=> {
    startTimer()
  })

  function startTimer () {
      var counter = setInterval (()=> {
        x++
        document.getElementById("counter").innerHTML = x
        if (x>=1000) {
          clearInterval(counter)
          document.getElementById("counter").innerHTML = 1000
        }
      },5)
      
  }
  
  
  
  return (
    <div className="App">
      <div id="menu" className="menu">
        <a href="#about">03. About</a>
        <a href="#skills">04. Skills</a>
      </div>
      
      

      <div className="test">content</div>
      <div className="title">Title</div>
      
      
    

      <div className="icon_night"></div>
      <div id="about" className="about div">Some content</div>
      <div id="line" className='line'></div>
      <div className="about div">SMore content</div>
      <div id="skills" className="skills div">List some skills</div>
      <div id="counter">{x}</div>
    </div>
  );
}

export default App;
