import React, { Fragment } from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Destination from './components/Destination'
import Signup from './components/SignUp';
import Show from './components/Show';
import Footer from './components/Footer';

function App() {
    return ( 
       
       <Router>
        <Header />
          <Routes>
          <Route  exact path="/" element={
             <Fragment>
             <Show />
             <Destination />
             
             </Fragment>


           } >
         
           </Route>
          <Route  path="/login" element = {<Login />}> </Route>
           
          <Route  path="/signup" element = {<Signup />}> </Route>
           
         
          </Routes>
       
    
       <Footer />
       
      
       </Router>
      
     );
}

export default App;