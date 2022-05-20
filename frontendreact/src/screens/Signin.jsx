import Axios from 'axios'
import {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';


import Swal from 'sweetalert2'


const URI = 'http://localhost:8000/users/'

const Signin = () => {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const cookies = new Cookies();


    const login = async (e) => {
        e.preventDefault()
        console.log(username + ' - ' +password)
        const res = await Axios.get(URI+username+'/'+password)
        const alert = res.data.alert
        const cookie = res.data.cookie
        cookies.set(cookie.name, cookie.token, { path: '/', expires: new Date(Date.now()+ 90 * 24 * 60 * 60 * 1000 ) });
        
        
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