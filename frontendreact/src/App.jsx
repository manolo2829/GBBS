import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu';
import Foros from './screens/Foros';
import Home from './screens/Home';
import Signin from './screens/Signin';
import Signup from './screens/Signup';

function App() {
  return (
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/foros' element={<Foros/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
