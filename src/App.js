// import logo from './logo.svg';
import React,{useEffect} from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Checkout from "./Checkout";
import Login  from "./Login";
import {auth} from "./firebase";
import Payment from "./Payment";
import {useStateValue} from './StateProvider';

function App() {
 // const dispatch =useDispatch();
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
// will only run once when the app component loads....

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser){
        // the user just logged in / the user was logged in
        dispatch({
          type:'SET_USER',
          user:authUser,
        })
      } else {
        // the user is logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  }, [dispatch]);
  return (
    //BEM
  <Router>
    <div className="app">
     <Header/>
      <Routes>
      <Route path="/login" element={<Login/>}/>
     <Route path="/Checkout" element={<Checkout/>}/>
     <Route path="/payment" element ={
      <React.Fragment>
        <Payment/>
        <h1>I am the payment route</h1>
      </React.Fragment>
     }/>
     <Route path="/" element={<Home/>}/>

      
     </Routes>
    
    </div>
  </Router>
  );
}

export default App;
