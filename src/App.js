import Navigation from './components/nav/navigation';
import Logo from './components/pic/logo';
import Linkgrabber from './components/image/linkgrabber';
import Face from './components/face/face';
import React,{useState,useEffect} from 'react';
import "./App.css";
import Signin from './components/signin/signin';
import Register from './components/register/register';
import Rank from './components/rank/rank';

function App() {

  const [input,setInput]=useState('')
  const [imgUrl,setImgUrl]=useState('https://www.vice.com/wp-content/uploads/sites/2/2022/09/1662049678863-screen-shot-2022-09-01-at-122736-pm.png?w=1024')
  const [route,setRoute]=useState('register')
  const [signin,setSignin]=useState(false)
  const[box,useBox]=useState({
    top_row:0,
    left_col:0,
    bottom_row:0,
    right_col:0
  }
  )
  const [user,setUser]=useState({
    id:'',
    name:"",
    email:"",
    entries:0,
    joined:""
  })
  const updateUsers=(newData)=>{
    setUser(prev=>({
      ...prev,
      ...newData
    }))
  }
  const loadUsers=(user)=>{
    updateUsers({
      id:user.id,
      name:user.name,
    email:user.email,
    entries:user.entries,
    joined:user.joined
    })
  }

  const onInputChange=(event)=>{
    setInput(event.target.value)
    console.log(event.target.value);
  }
  
  const onClickChange=()=>{
setImgUrl(input)

 fetch('http://localhost:3001/imageurl', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          input:input
        })
      })
      .then(response => response.json())
      .then(response=> {console.log(response)})
      
  }
  
  const onRouteChange=(route)=>{
    if(route==='signin'){
      setSignin(false)
    } else if(route==='home'){
      setSignin(true)
    }
    setRoute(route)
    setImgUrl('https://www.vice.com/wp-content/uploads/sites/2/2022/09/1662049678863-screen-shot-2022-09-01-at-122736-pm.png?w=1024')
  }
  const signInStatus=(signin)=>{
setSignin(signin)
  }
  return (
    <div className="App">
         <Navigation onRouteChange={onRouteChange} signInStatus={signin}  />
       {route==='home'? <div>
        <Logo/>
        <Rank user={user} />
          <Linkgrabber onInputChange={onInputChange} onClickChange={onClickChange}  user={user} updateUsers={updateUsers}/>
        <Face imgUrl={imgUrl}/>
        </div>
        
      :( route==='signin'?
      <Signin onRouteChange={onRouteChange} signInStatus={setSignin} loadUsers={loadUsers} />
      :<Register onRouteChange={onRouteChange} loadUsers={loadUsers}/>
      )

      }
      </div>
  );
}

export default App;
