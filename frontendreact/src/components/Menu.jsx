import { NavLink } from "react-router-dom";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import './menu.css'
import Axios from 'axios'
import {useEffect, useState} from 'react'

const URI = 'http://localhost:8000/users/'

const Menu = () => {

    const cookies = new Cookies();
    const navigate = useNavigate()

    const [user, setUser] = useState(false);

    const isAuthenticated = async() =>{
        try {
            const cookie = cookies.get('jwt')
            if(cookie){
                const res = await Axios.get(URI+cookie)
                console.log(res.data)
                if(res.data){
                    setUser(res.data)
                }else{
                    setUser(false)
                }
            }else{
                setUser(false)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect( () => {
        isAuthenticated()
    }, [])


    const LogOut = async() =>{
        try {
            cookies.remove('jwt')
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (  
        <header>
            <nav className="navbar navbar-expand-lg bg-light navContainer">
                <div className="container-lg">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className={user ? ("navbar-nav ms-auto mb-2 mb-lg-0"): ("navbar-nav m-auto mb-2 mb-lg-0")}>
                        <li className="nav-item">
                            <NavLink to="/" className='nav-link'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/" className='nav-link'>Nosotros</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/" className='nav-link'>Orgaizaciones</NavLink>
                        </li>
                        {
                            user ? (
                                <span></span>
                            ):(
                                <li className="nav-item dropdown">
                                    <NavLink to="/signin" className='nav-link'>Usuario</NavLink>
                                </li>
                            )
                        }
                    </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
 
export default Menu;