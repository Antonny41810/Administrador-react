import Navbar from "./components/Navbar";
import { useNavbar } from "./hooks/useNavbar";
import Home from "./views/home";
import Productos from "./views/Productos";
import Usuarios from "./views/Usuarios";
import Ventas from "./views/Ventas";
import {Route, Routes} from 'react-router-dom';



function App() {
const {URLS} = useNavbar();

  return (
    <div>
     <Navbar links={URLS}/> 
     <Routes>
       <Route path='/' element={<Home />}/>
       <Route path='/productos' element={<Productos />}/>
       <Route path='/usuarios' element={<Usuarios />}/>
       <Route path='/ventas' element={<Ventas />}/>
     </Routes>
    </div>
  );
}

export default App;
