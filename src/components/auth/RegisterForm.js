import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form , Input , Button, Checkbox, DatePicker } from 'antd';

const RegisterForm = ({onSubmitRegisterForm}) => {

  const [checked,setChecked ] = useState(true);
  const  onFinish = values => {
        onSubmitRegisterForm(values);
            }
  const onFinishFailed = values => {
        console.log(values);
            }
  const changeChecked = () => {
      checked ? setChecked(false) : setChecked(true);
  }
    return (
          <div className="auth-form-div">
                        <Form layout='vertical'
                               labelCol={{span:16}}

                               wrapperCol={{
                                span: 32,
                              }}
                               onFinish={onFinish}
                            onFinishFailed={onFinishFailed}>
                            <Form.Item>
                                <h1>Register </h1>
                            </Form.Item>
                            <Form.Item label='First Name'
                                        name='firstName'
                                        rules={[
                                            {required:true , message:'Please enter a firstname'},

                                        ]}>
                                        <Input  autoComplete='off' />
                            </Form.Item>
                            <Form.Item label='Other Names'
                                        name='otherNames'
                                        rules={[
                                            {required:true , message:'Please enter a name'},
                                        ]}>
                                        <Input  autoComplete='off' />
                            </Form.Item>
                            <Form.Item label='Username'
                                        name='username'
                                        rules={[
                                            {required:true , message:'Please enter a username'},
                                        ]}>
                                        <Input  autoComplete='off' />
                            </Form.Item>
                            <Form.Item label='Email'
                                        name='email'
                                        rules={[
                                            {required:true , message:'Please enter a firstname'},
                                            {pattern:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:'Please enter a valid email'}
                                        ]}>
                                        <Input  autoComplete='off' />
                            </Form.Item>
                            <Form.Item name='DOB'
                                       label='Date of Birth'
                                       rules={[
                                           {required:true,message:'Please enter a date of birth'}
                                       ]}>
                                <DatePicker  />
                            </Form.Item>
                            <Form.Item label='Password'
                                       name='password'
                                       hasFeedback
                                       rules={[
                                           {required:true,  message:'Please enter a password'},
                                           {min:8 , message:'Password should be greater than 8 characters'}
                                           
                                       ]}>
                                <Input.Password autoComplete='off' />
                            </Form.Item>
                            <Form.Item label='Confirm Password'
                                       name='confirmPassword'
                                       rules={[
                                           {required:true,  message:'Please confirmPassword'},
                                           {min:8 , message:'Password should be greater than 8 characters'},
                                           ({ getFieldValue }) => ({
                                            validator(_, value) {
                                              if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                              }
                                              return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                            },
                                          })
                                       ]}>
                                <Input.Password autoComplete='off' />
                            </Form.Item>
                            <Form.Item name="remember" valuePropName="checked">
                                <Checkbox checked={checked} 
                                          onChange={changeChecked}
                                        >I have read and aggreed to the 
                                        <Link> terms and condition</Link>
                                </Checkbox>
                            </Form.Item>
                            <Form.Item>
                                forgot password ?
                            </Form.Item>
                            <Form.Item>
                                <Button htmlType='submit' 
                                        type='primary'
                                        disabled={checked}>
                                        Register</Button>
                            </Form.Item>
                        </Form>
                    </div>
    )
}

export default RegisterForm;
