import React from "react";
import Signin from "../signin/signin";

const Navigation =({onRouteChange,signInStatus})=>{
    
        if (signInStatus){
            return(
            <nav className="tr">
        <p  onClick={()=> onRouteChange('signin')} className="f3 link dim black underline pa3 pointer">Sign Out</p>
             </nav>)
        } else{
            return(
              <div className="tr">
        <p  onClick={()=> onRouteChange('signin')} className="f3 link dim black underline pa3 pointer">Sign In</p>
         <p  onClick={()=> onRouteChange('register')} className="f3 link dim black underline pa3 pointer">Register</p>
         </div>
            )
        }
}
export default Navigation;