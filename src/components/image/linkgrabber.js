import React from "react";
import "./img.css"
const Linkgrabber =({onInputChange,onClickChange,user,updateUsers})=>{
     const onSubmitImg=()=>{
        fetch('http://localhost:3001/image',
          {
          method:'put',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({
            id:user.id
          })
        })
        .then(Response=>Response.json())
        .then(res=>{
  if(res.status===200){
    updateUsers(prev => ({ ...prev, entries: res.user.entries }))
  }
})
        }
        const handleclick=()=>{
        onSubmitImg()   
             onClickChange()
        }
    return(
<div className="tc f3">
   <p>{'Give it a try'} </p>
    <div className="center pa3 shadow-5 w-70 form br3">
          <input type="text" className="w-40 br2 " onChange={onInputChange}/>
        <button className="w-5 grow f4 link ph3 pv2 back br2 button" onClick={handleclick}>{'Detect'}</button>
    </div>
</div>
    );
}
export default Linkgrabber;