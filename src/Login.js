// Login.js
// import React, {useState} from 'react'
// import './Login.css'
// import {Link} from "react-router-dom"
// // import {auth} from "./firebase"
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const signIn = e =>{
//      e.preventDefault()

//      // some fancy firebase login stuffffff
//   }

//   const register = e=>{
//     e.preventDefault();

//     auth
//        .createUserWithEmailAndPassword(email,password)
//        .then((auth) => {
//            // it successfully created a new user with email and password
//            console.log(auth);
//        })
//        .catch(error=> alert(error.message))

//     // some fancy firebase register stufff.....
//   }
//   return (
//     <div className='login'>
//         <Link to='/'>
//         <img className="login__logo"
//         src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'/>
//       </Link>
      
//       <div className='login__container'>
//         <h1>Sign-in</h1>
//         <form>
//             <h5>E-mail</h5>
//             <input type='text' value={email} onChange={e=> setEmail(e.target.value)}/>

//             <h5>Password</h5>
//             <input type='password' value={password} onChange={e=> setPassword(e.target.value)}/>
            
//             <button type ='submit' onClick={signIn}
//             className='login__signInButton'>Sign In</button>
//         </form>
//         <p>
//             By signing-in you agree to the AMAZON FAKE CLONE Conditions 
//             of Use & Sale. Please see our Privacy Notice, our Cookies Notice
//             and our Interest-Based Ads Notice.
//         </p>

//         <button onClick ={register} className="login__registerButton">Create your Amazon account</button>

//       </div>

//     </div>
//   )
// }

// export default Login
import React, { useState } from 'react';
import './Login.css';
import { Link,  useNavigate } from "react-router-dom";
import {auth} from "./firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth();

  const signIn = (e) => {
    e.preventDefault();

    // Firebase sign-in with email and password
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        // Successfully signed in
        if(auth){
          navigate('/')
        }
        console.log("Signed in:", auth);
      })

      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    // Firebase create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Successfully created a new user
        if (auth){
            navigate('/')
        }
        console.log("Registered:", userCredential);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img className="login__logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt="Amazon Logo" />
      </Link>

      <div className='login__container'>
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

          <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions 
          of Use & Sale. Please see our Privacy Notice, our Cookies Notice
          and our Interest-Based Ads Notice.
        </p>

        <button onClick={register} className="login__registerButton">Create your Amazon account</button>
      </div>
    </div>
  );
}

export default Login;
