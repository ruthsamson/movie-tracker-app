import React, {Component} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Collections from './Collections';
import Home from './Home';
import '../css/MyRoutes.css'



class MyRoutes extends Component {
    render() {
      return (
        <Router>
          <div>
            <Navbar/>
            <hr/>
            <Routes>
              <Route path ="/" element={<Home/>}/>
              <Route path ="/collections" element={<Collections/>}/>
            </Routes>
          </div>
        </Router>
      )
    }
  }
  
  class Navbar extends Component {
    render() {
      return (
        <div className='nav'>
          <Link to = "/"> Home </Link>
          <Link to = "/collections"> Collections </Link>
        </div>
      )
    }
  }

  export default MyRoutes;