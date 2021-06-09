import React, { Component } from 'react';
import { Button, Form, Input } from 'antd';

export class LoginLayout extends Component {

    onFinish = values => {
console.log(values);
    }
    onFinishFailed = values => {
     console.log(values);
    }
    render() {
        return (
            <div className='container-central'>
               <div className='auth-form-container box-shadow'>
                    <div className="auth-form-div">
                        <Form layout='vertical'
                               labelCol={{span:9}}
                               wrapperCol={{
                                span: 32,
                              }}
                               onFinish={this.onFinish}
                            onFinishFailed={this.onFinishFailed}>
                            <Form.Item>
                                <h1>Login </h1>
                            </Form.Item>
                            <Form.Item label='Email'
                                        name='email'
                                        rules={[
                                            {required:true , message:'Please enter an email'},
                                            {pattern:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:'Please enter a valid email'}

                                        ]}>
                                        <Input  autoComplete='off' />
                            </Form.Item>
                            <Form.Item label='Password'
                                       name='password'
                                       rules={[
                                           {required:true, message:'Please enter a password'},
                                           {min:8 , message:'Password should be greater than 8 characters'}
                                       ]}>
                                <Input.Password autoComplete='off' />
                            </Form.Item>
                            <Form.Item>
                                <Button htmlType='submit' type='primary'>Login</Button>
                            </Form.Item>
                            <Form.Item>
                                forgot password ?
                            </Form.Item>
                        </Form>
                    </div>
                    <div className="auth-form-info">
                        <h1>Liberation Interval</h1>
                        <p>Don't have an Acount ? </p>
                        <button className='auth-button'>Sign Up</button>
                    </div>
               </div>
            </div>
        )
    }
}

export default LoginLayout;
