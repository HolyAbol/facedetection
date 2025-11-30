import React from "react";


const Rank=({user})=>{
    return(
        <div className="center f2">
            <p>{user.name} Your rank is {user.entries}</p>
        </div>
    )
}

export default Rank;