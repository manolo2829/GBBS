import Cookies from 'universal-cookie';
import Axios from 'axios'
import {useEffect, useState} from 'react'
import { useNavigate, Link } from "react-router-dom";



const URI = 'http://localhost:8000/users/'

const Foros = () => {
    const [user, setUser] = useState(null);
    const cookies = new Cookies();
    const navigate = useNavigate()

    const isAuthenticated = async() =>{
        try {
            const cookie = cookies.get('jwt')
        
            if(cookie){
                const res = await Axios.get(URI+cookie)
                console.log(res.data)
                if(res.data){
                    setUser(res.data)
                }else{
                    navigate('/')
                }
            }else{
                navigate('/')
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect( () => {
        isAuthenticated()
    }, [])

    return ( 
       <div className="container-lg">
           <div className="row">
               <ul>
                   <li><Link to='/crearforo'>Crear un foro</Link></li>
               </ul>
           </div>
           <div className="row justify-content-center align-items-center">
                <div className="card" style={{ width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="!#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="!#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="!#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="!#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
           </div>
           
       </div>
    );
}
 
export default Foros;