import Axios from 'axios'
import {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";

import Swal from 'sweetalert2'


// damos la uri de nuestro backend
const URI = 'http://localhost:8000/users/'

const Signup = () => {

    const [email, setEmail] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const navigate = useNavigate()

    const createUser = async (e) => {
        e.preventDefault()
        const res = await Axios.post(URI, {email: email, username: username, password: password})
        const alert = res.data
        if(alert.alert === true){
            Swal.fire({
                title: alert.alertTitle,
                text: alert.alertMessage,
                icon: alert.alertIcon,
                showConfirmButton: alert.showConfirmButton,
                timer: alert.timer
            }).then(() => {
                window.location = alert.ruta
            })

        }else{
            Swal.fire({
                title: alert.alertTitle,
                text: alert.alertMessage,
                icon: alert.alertIcon,
                showConfirmButton: alert.showConfirmButton,
                timer: alert.timer
            })
        }
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