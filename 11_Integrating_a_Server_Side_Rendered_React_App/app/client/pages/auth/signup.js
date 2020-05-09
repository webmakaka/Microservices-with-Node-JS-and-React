import { useState } from 'react';
import axios from 'axios';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/users/signup', {
        email,
        password,
      });

      console.log(response.data);
    } catch (err) {
      console.log(err.response.data);
      setErrors(err.response.data.errors);
    }
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <h1>Sign Up</h1>
        <div className="form-group">
          <label>Email Address</label>
          <input
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            className="form-control"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>

        {errors.length > 0 && (
          <div className="alert alert-danger">
            <h4>Oooops....</h4>
            <ul className="my-0">
              {errors.map((err) => (
                <li key={err.message}>{err.message}</li>
              ))}
            </ul>
          </div>
        )}
        <button className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  );
};
