import { Link } from "react-router-dom";


const Menu = () => {
    return (  
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/foros'>Foros</Link></li>
            <li><Link to='/signup'>Sign Up</Link></li>
            <li><Link to='/signin'>Sign In</Link></li>
        </ul>
    );
}
 
export default Menu;