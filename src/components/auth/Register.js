import React, { Component } from 'react';
import RegisterFormInfo from './RegisterFormInfo';
import RegisterForm from './RegisterForm';
import { authApiCall } from '../../api/auth/auth';
import { connect } from 'react-redux';
import { message } from 'antd';

export class RegisterLayout extends Component {

    registerUser = async values => {
      const msgLoadingRegister = message.loading('Registering your account');
      const res = await  authApiCall(this.props.api_url,values,'/api/auth/register');
      if (!res.success) {
        setTimeout(msgLoadingRegister);
        message.error(res.error);
    }
    else {
      localStorage.setItem('auth_token',res.token);
      setTimeout(msgLoadingRegister);
      this.props.history.push('/home');
    }
    }

    render() {
        return (
            <div className='container-central'>
               <div style={{marginTop:"70px"}} className='auth-form-container box-shadow auth-register-form'>
                   <RegisterForm onSubmitRegisterForm={this.registerUser} />
                   <RegisterFormInfo />
               </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        api_url: state.globalReducer.api_url
    }
}

export default connect(mapStateToProps)(RegisterLayout);
