import React from 'react';

import { Form , Input , Button } from 'antd';

const LoginForm = ({submitLoginForm}) => {

  const  onFinish = values => {
   submitLoginForm(values);
            }
  const onFinishFailed = values => {
        console.log(values);
            }
    return (
          <div className="auth-form-div">
                        <Form layout='vertical'
                               labelCol={{span:9}}
                               wrapperCol={{
                                span: 32,
                              }}
                               onFinish={onFinish}
                            onFinishFailed={onFinishFailed}>
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
    )
}

export default LoginForm
