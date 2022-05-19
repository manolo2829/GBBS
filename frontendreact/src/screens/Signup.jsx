import Axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

// damos la uri de nuestro backend
const URI = 'http://localhost:8000/users/'

const Signup = () => {

    const [email, setEmail] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [passwordConfirm, setPasswordConfirm] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const createUser = async (e) => {
        e.preventDefault()
        const res = await Axios.post(URI, {email: email, username: username, password: password})
        console.log(res.data)
        navigate('/')
    }

    return ( 
        <div className="container-lg">
            <div className="row">
                <form onSubmit={createUser}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" onChange={(e) => {setEmail(e.target.value)}} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" onChange={(e) => {setUsername(e.target.value)}} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" onChange={(e) => {setPassword(e.target.value)}} />
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Crear</button>
                </form >
            </div>
        </div>
    );
}
 
export default Signup;