import React from 'react'
import {Navigate} from 'react-router-dom'
import { useAuth } from '../components/Context/authContext'

const ProtectedRoutes = ({children}) => {
  const {user, loading} = useAuth();
  if(loading) {
    return <div>Loading...</div>
  }

  if(!user) {
    return <Navigate to="/register" replace={true} />
  }
  return children;
};

export default ProtectedRoutes;