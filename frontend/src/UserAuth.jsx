import React, { useEffect, useState } from 'react'
import {Navigate, useNavigate} from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';

const UserAuth = ({children}) => {

  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem('user'))
  );

  if(currentUser!==null){
    return children;
  }else{
    enqueueSnackbar('You are not logged in!', { variant: 'error' });
    return <Navigate to="/login" />
  }
  
  

}

export default UserAuth;
