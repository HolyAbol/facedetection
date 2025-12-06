import React,{useState,useEffect} from 'react';





const Face =({imgUrl})=>{


    const[box,setBox]=useState({
        topRow:0,
        leftCol:0,
        bottomRow:0,
        rightCol:0
      })

    const values=(data)=>{
     const image = document.getElementById('inputimage');
    const { top_row, left_col, bottom_row, right_col } = data.outputs[0].data.regions[0].region_info.bounding_box;
    
 const width = Number(image.width);
 const height=Number(image.height);
 console.log(image)
  return {
  top: top_row * height,
  left: left_col * width,
  boxWidth: (right_col - left_col) * width,
  boxHeight: (bottom_row - top_row) * height
};


}


const handleFaceDetection = (data) => {
  const faceBox = values(data);
  setBox(faceBox);
  console.log({faceBox})
};



const apicall=(imgUrl)=>{
if(imgUrl){
    fetch('https://face-detection.liara.run/imageurl', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          input:imgUrl
        })
      })
      .then(response => response.json())
 .then(response => {
        handleFaceDetection(response); 
      })
    .catch(err=>console.log(err))
}
    }
    useEffect(() => {
    if (imgUrl) {
      apicall(imgUrl);
      setTimeout(() => {
  balls()
}, 5000);
    }
  }, [imgUrl]);

  const balls=()=>{
    console.log(box)
  }

    return(
<div className="center relative">
<img id="inputimage" alt='cool pic' src={imgUrl}/>
<div className='bounding-box' style={{
    position: "absolute",
    top: box.top,
    width: box.boxWidth,
    height: box.boxHeight,
    border: "3px solid red"
  }}
></div>
</div>
    );
}
export default Face;