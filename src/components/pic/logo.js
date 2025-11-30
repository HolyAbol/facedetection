import React from "react";
import Tilt from 'react-parallax-tilt';
import "./logo.css"
import Brain from './id.png'
const Logo =()=>{
    return(
    <Tilt className="w-10">
    <div className=" ma4 mt0 Tilt br2 shadow-2 w4 h4 tc dib ">
         <div className="pa3"><img style={{paddingTop:'6px'}} src={Brain} alt="bruh"/></div>
    </div>
    </Tilt>

    );
}
export default Logo;