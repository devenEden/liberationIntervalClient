import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import LoginLayout from '../../layouts/auth/Login';
import RegisterLayout from '../../layouts/auth/Register';

const AuthPage = ({history}) => {

    const authLayout = useSelector(state => state.globalReducer.authLayout);
    useEffect(() => {
        if (localStorage.getItem('auth_token')) {
            history.push('/');
          }
    }, []);
    return (
        <div>
            {
                authLayout === 'login' ? (<LoginLayout history={history} />) : (<RegisterLayout history={history} />)
            } 
        </div>
    )
}

export default AuthPage;
