import React from 'react';
import { useDispatch } from 'react-redux';
import { changeAuthPage } from '../../actions/global/globalActions';

const LoginFormInfo = () => {
    const dispatch = useDispatch();

    const onChangeAuthPage = () => {
      console.log('Action',dispatch(changeAuthPage('register')));
    }

    return (
        <div className="auth-form-info">
            <h1>Liberation Interval</h1>
            <p>Don't have an Acount ? </p>
            <button onClick={onChangeAuthPage} className='auth-button'>Sign Up</button>
        </div>
    )
}

export default LoginFormInfo
