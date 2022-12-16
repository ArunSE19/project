import './App.css';
// import Navbar from './components/Navbar';
import Home from './components/Home';
import Signup from './components/Signup';
import { Routes,Route } from 'react-router-dom';
import Login from './components/login';
import Dashboard from './components/Dashboard';
// import Layout from './components/Layout';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      {/* <Route path='/Navbar' element={<Navbar/>}/>  */}
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>  
      <Route path='/dashboard' element={<Dashboard/>}/>  
    </Routes>
    </>
  );
}

export default App;
