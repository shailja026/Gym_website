import React,{useState} from 'react'
import { Link, json } from 'react-router-dom'
import "../Css/registerForm.css"

function Registration() {
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const user = {name , email , password}
 const handleSubmit = () => {
    
    if(name !== "" && email !== "" && password !== "" )
    {
    //   localStorage.setItem("name",name)
    //   localStorage.setItem("email",email)
    //   localStorage.setItem("password",password)
    //   localStorage.setItem("signUp",email)
      
     // window.location.reload()
     localStorage.setItem("user",JSON.stringify(user))
     console.log(user)
     alert("Account created successfully!!")
    }
 }
  return (
    <div className='register'>
        <form onSubmit={handleSubmit}>
        <input value={name} type='text' onChange={(e) =>  setName(e.target.value)} placeholder='Enter your name'/>
        <input value={email} type='email' onChange={(e) =>  setEmail(e.target.value)} placeholder='Enter your email'/>
        <input value={password} type='password' onChange={(e) =>  setPassword(e.target.value)} placeholder='Enter password'/>
        <button type='submit'>register</button>
        <h3>already have account ??
            <Link to="/Login">login</Link>
        </h3>
        </form>

        
    </div>
  )
}

export default Registration