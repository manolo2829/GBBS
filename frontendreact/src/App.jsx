import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu';
import CrearForo from './screens/CrearForo';
import Foros from './screens/Foros';
import Home from './screens/Home';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import User from './screens/User';

function App() {
  return (
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/foros' element={<Foros/>}></Route>
        <Route path='/crearforo' element={<CrearForo/>}></Route>
        <Route path='/user' element={<User/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
