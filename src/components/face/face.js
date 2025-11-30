import React from "react";

const Face =({imgUrl})=>{

    return(
<nav className="center">
<img alt='cool pic' src={imgUrl} className="h-30 w-40 pa3"/>
</nav>
    );
}
export default Face;