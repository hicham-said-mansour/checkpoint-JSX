import React from 'react';
import Image1 from '../css.svg';
import Image2 from '../html5.svg';
import Image3 from '../react.svg';
import './Exo1.css';

function Exo1(){
  return (
    <div className= "Mahrez">
      <h2>Front End Technologies</h2>
      <br></br>
      <img src = {Image1} style= {{height:'100px' , width: '100px' }}></img>
      <img src = {Image2} style= {{height:'100px' , width: '100px' }}></img>
      <img src = {Image3} style= {{height:'100px' , width: '100px' }}></img>
    </div>
    
  )
}
export default Exo1;