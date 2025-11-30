
import React,{useState,useEffect} from 'react';
const Signin =({onRouteChange, signInStatus,loadUsers})=>{
  const [email,setEmail]=useState('')
  const [pass,setPass]=useState('')
 const onEmailChange=(event)=>{
    setEmail(event.target.value)
  }
 const onPassChange=(event)=>{
    setPass(event.target.value)
  }
 const onSubmitSignin=()=>{

        console.log({email,pass})
        fetch('http://localhost:3001/signin',
          {
          method:'post',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({
            email:email,
            password:pass
          })
        })
        .then(Response=>Response.json())
        .then(Response=>{
          if(Response.id){
             onRouteChange('home');
              signInStatus(true)
              loadUsers(Response)
          } else{
            console.log("error")
          }
        })
  }
    return(
      <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
<main className="pa4 black-80">
  <form className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f1 fw6 ph0 mh0">Sign In</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" for="email-address">Email</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
         type="email"
          name="email-address"
            id="email-address"
            onChange={onEmailChange}/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" for="password">Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
         type="password"
          name="password"
            id="password"
            onChange={onPassChange}
            />
      </div>
    </fieldset>
    <div className="">
      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value="Sign in" onClick={onSubmitSignin}/>
    </div>
    <div className="lh-copy mt3">
    </div>
  </form>
</main>
</article>
    );
}
export default Signin;