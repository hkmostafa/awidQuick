import './App.scss'
import React , {Suspense} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes} from 'react-router-dom';
const Home = React.lazy(()=>import( './pages/home/home')) 
const Restaurants= React.lazy(()=>import('./pages/restaurants/restaurants'))
const Login = React.lazy(()=>import('./pages/support/login/login'))
const Dashboard = React.lazy(()=>import('./pages/support/dashboard/homepage/dashboard'))
// import AddRestaurant from './pages/support/dashboard/AddForms/addRestaurant';
// import AddMenu from './pages/support/dashboard/AddForms/addPlat';
// import AddSection from './pages/support/dashboard/AddForms/addSection';
import ScrollToTop from './utility/scrollToTop';
import LoadingSpinner from './utility/loading';
function App() {

  return (
    <Router>
      <ScrollToTop/>
    <Routes>

      <Route path='/' element={<Suspense fallback={<LoadingSpinner/>}><Home/></Suspense>}/>
      <Route path='/restaurants' element={<Suspense fallback={<LoadingSpinner/>}><Restaurants/></Suspense>}/> 
      <Route path='/login' element={<Suspense fallback={<LoadingSpinner/>}><Login/></Suspense>}/>
      <Route path='/dashboard' element={<Suspense fallback={<LoadingSpinner/>}><Dashboard/></Suspense>}/>


      </Routes>
    </Router>
  )
}

export default App
