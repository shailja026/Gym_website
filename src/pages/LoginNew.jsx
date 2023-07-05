import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import "../Css/ligin.css"

function LoginNew() {
    const navigate = useNavigate()
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
     
    // const localValue = localStorage.getItem()
    const handleLogin = () => {
        const localInfo = localStorage.getItem("user")
        if(localInfo){
            const info = JSON.parse(localInfo)
            if(info.email === email && info.password === password){
                navigate("/")
            }else{
                alert("Enter valid information")
            }
        }else{
            alert("user dosn't exits")
            navigate('/regitration')
        }
    }
  return (
    <div className='logIn'>
        <form onSubmit={handleLogin}>
        
        
        <input value={email} type='email' onChange={(e) =>  setEmail(e.target.value)} placeholder='Enter your email'/>
        <input value={password} type='password' onChange={(e) =>  setPassword(e.target.value)} placeholder='Enter password'/>
        <button type='submit'>login</button>
        <h3>Back to 
            <Link to="/">Home</Link>
        </h3>
        </form>
    </div>
  )
}

export default LoginNew