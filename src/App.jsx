import './App.scss'
import {
  BrowserRouter as Router,
  Route,
  Routes} from 'react-router-dom';
import Home from './pages/home/home';
import Restaurants from './pages/restaurants/restaurants'
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

function App() {

  return (
    
    <Router>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/restaurants' element={<Restaurants/>}/> 
 
      </Routes>
     <Footer/>
    </Router>
  )
}

export default App
