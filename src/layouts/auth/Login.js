import { message } from 'antd';
import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import { authApiCall } from '../../api/auth/auth';
import LoginForm from '../../components/auth/LoginForm';
import LoginFormInfo from '../../components/auth/LoginFormInfo';

export class LoginLayout extends Component {
    
    
    loginUser = async values => {
        const msgLoadingLogin = message.loading('Logging you in');
       const res = await authApiCall(this.props.api_url,values,'/api/auth/login');
       if (!res.success) {
           setTimeout(msgLoadingLogin);
           message.error(res.error);
       }
       else {
         localStorage.setItem('auth_token',res.token);
         setTimeout(msgLoadingLogin);
         this.props.history.push('/');
       }
    }
    render() {
        return (
            <div className='container-central'>
               <div className='auth-form-container box-shadow'>
                   <LoginForm submitLoginForm={this.loginUser} />
                   <LoginFormInfo />
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

export default connect(mapStateToProps)(LoginLayout);
