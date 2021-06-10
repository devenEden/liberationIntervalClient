import React from 'react';
import { useDispatch } from 'react-redux';
import { changeAuthPage } from '../../actions/global/globalActions';

const RegisterFormInfo = () => {
     
    const dispatch = useDispatch();
    const onChangeAuthPage = () => {
      console.log('Action',dispatch(changeAuthPage('login')));
    }
    return (
        <div className="auth-form-info">
            <h1>Liberation Interval</h1>
            <p>Already have an Acount ? </p>
            <button onClick={onChangeAuthPage} className='auth-button'>Sign In</button>
        </div>
    )
}

export default RegisterFormInfo;
