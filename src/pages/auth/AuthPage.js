import React from 'react';
import { useSelector } from 'react-redux';
import LoginLayout from '../../layouts/auth/Login';
import RegisterLayout from '../../layouts/auth/Register';

const AuthPage = () => {

    const authLayout = useSelector(state => state.globalReducer.authLayout);
    return (
        <div>
            {
                authLayout === 'login' ? (<LoginLayout />) : (<RegisterLayout />)
            } 
        </div>
    )
}

export default AuthPage;
