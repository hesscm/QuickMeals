import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Button } from '@mui/material';


function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <Typography variant="h5" gutterBottom>Register User</Typography>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <Typography variant="h6" htmlFor="username" component="label" gutterBottom>Username:
          <input
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </Typography>
      </div>
      <div>
        <Typography variant="h6" htmlFor="username" component="label" gutterBottom>Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </Typography>
      </div>
      <div>
        <Button type="submit" variant="contained" color="secondary" name="submit">Register</Button>
      </div>
    </form>
  );
}

export default RegisterForm;
