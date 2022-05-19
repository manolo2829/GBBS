import Axios from 'axios'
import {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";

const URI = 'http://localhost:8000/users/login'

const Signin = () => {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const navigate = useNavigate()

    const login = async (e) => {
        e.preventDefault()
        console.log(username + ' - ' +password)
        const user = await Axios.post(URI, {username: username, password: password})
        console.log(user.data)
        navigate('/')
    }

    return (  
        <div className="container-lg">
            <div className="row">
            <form onSubmit={login}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" onChange={(e) => {setUsername(e.target.value)}} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" onChange={(e) => {setPassword(e.target.value)}} />
                    </div>
                    <button type="submit" className="btn btn-primary">Iniciar sesion</button>
                </form >

            </div>
        </div>
    );
}
 
export default Signin;