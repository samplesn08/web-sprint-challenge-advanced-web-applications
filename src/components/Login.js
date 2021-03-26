import React, { useEffect, useState } from "react";
import * as yup from 'yup';
import axiosWithAuth from "../helpers/axiosWithAuth";

const Login = (props) => {
  const formSchema = yup.object().shape({
    username: yup
    .string()
    .required('Username or Password not valid.'),
    password: yup
    .string()
    .required('Username or Password not valid.'),
  });
  const [formValues, setFormValues] = useState({
    username: '',
    password: ''
  })
  const [errors, setErrors] = useState({
    username: '',
    password: ''
  });
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const loginHandler = e => {
    e.preventDefault();
    axiosWithAuth().post('http://localhost:5000/api/login', formValues)
      .then(resp => {
        localStorage.setItem('token', resp.data.payload);
        props.history.push('/bubble');
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(()=>{
    
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
  }, []);

  const changeHandler = e => {
    const { name, value } = e.target;
    yup
    .reach(formSchema, name)
    .validate(value)
    .then(valid => {
      setErrors({
        ...errors, [name]: ''
      });
    })
    .catch(err => {
      setErrors({
        ...errors, [name]: err.errors[0]
      });
    });
    setFormValues({
      ...formValues, [name]: value
    });
  };

  return (
    <>
      <h1>
        Welcome to the Bubble App!
      </h1>
      <form onSubmit={loginHandler}>
        <label>
          username 
          <input onChange={changeHandler} type='text' name='username' value={formValues.username} placeholder='Username' required></input>
        </label>
        { errors.username.length > 0 && <p className='error-message'>{errors.username}</p> }
        <label>
          password 
          <input onChange={changeHandler} type='password' name='password' value={formValues.password} placeholder='Password' required></input>
        </label>
        { errors.password.length > 0 && <p className='error-message'>{errors.password}</p> }
        <button>Log In</button>
      </form>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.