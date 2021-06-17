import { Modal, Form, Button, Input } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleForgotPasswordModal } from "../../actions/global/globalActions";

const ForgotPassword = ({submitForgotPasswordForm}) => {
  const visible = useSelector(
    (state) => state.globalReducer.isForgotPasswordModalOpen
  );
  const dispatch = useDispatch();
  const onClose = () => {
      console.log('Action',dispatch(toggleForgotPasswordModal(false)));
  };
  const onFinish = (values) => {
    submitForgotPasswordForm(values);
  };
  const onFinishFailed = (values) => {
    console.log(values);
  };

  return (
    <div>
      <Modal
        title="Please enter your email to reset your password"
        visible={visible}
        footer={null}
        onCancel={onClose}
      >
        <Form
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please enter an email" },
              {
                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ForgotPassword;
