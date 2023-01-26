import './App.scss'
import {
  BrowserRouter as Router,
  Route,
  Routes} from 'react-router-dom';
import Home from './pages/home/home';
import Restaurants from './pages/restaurants/restaurants'
import Login from './pages/support/login/login';
import AddRestaurant from './pages/support/dashboard/AddForms/addRestaurant';
import AddMenu from './pages/support/dashboard/AddForms/addPlat';
import AddSection from './pages/support/dashboard/AddForms/addSection';

function App() {

  return (
    <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/restaurants' element={<Restaurants/>}/> 
      <Route path='/login' element={<Login/>}/>
      <Route path='/addRestau' element={<AddRestaurant/>}/>
      <Route path='/addMenu' element={<AddMenu/>}/>

      <Route path='/addSection' element={<AddSection/>}/>

      </Routes>
    </Router>
  )
}

export default App
