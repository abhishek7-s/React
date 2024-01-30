import React, {useState,useContext} from 'react'
import UserContext from '../Context/usercontext'
import UserContextProvider from '../Context/Usercontextprovider'

function Login() {
    
    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({Username,Password})
    }
  return (
    <div>
      <h2>Login</h2>
      <input type='text' value={Username} placeholder='Username' onChange={(e) => setUsername(e.target.value) }/>
      
      <input type='text' value={Password} placeholder='Password' onChange={(e) => setPassword(e.target.value) }/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
