import React from 'react';
import { Link } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const userItem = sessionStorage.getItem('userItem');
  if (!userItem) {
    return <div style={{padding: '2rem', textAlign: 'center', position: 'absolute',
     top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
        <h1>Please <Link to="/sign-up">sign up</Link> or <Link to="/login">login</Link> to access this page.</h1></div>;
  }
  return children;
};

export default ProtectedRoute;