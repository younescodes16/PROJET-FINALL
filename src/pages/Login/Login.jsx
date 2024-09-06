import  { useState } from 'react';
import './Login.css';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleAuthMode = () => {
    setIsSignUp((prevMode) => !prevMode);
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
        <form>
          {isSignUp && (
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>
          )}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          {isSignUp && (
            <div className="input-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" id="confirmPassword" placeholder="Confirm your password" />
            </div>
          )}
          <button type="submit" className="auth-button">
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>
        <p onClick={toggleAuthMode} className="toggle-auth">
          {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
        </p>
      </div>
    </div>
  );
};

export default Login;
