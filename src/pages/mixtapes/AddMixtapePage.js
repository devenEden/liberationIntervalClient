import { Button, Form, Input, Select, Space } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { Component } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { connect } from "react-redux";
import { verifyTokenApiCall } from "../../api/auth/auth";
import Header from "../../components/common/Header";
import NavDrawer from "../../components/common/NavDrawer";

const { Option } = Select;
export class AddMixtapePage extends Component {
  verify = async () => {
    try {
      const res = await verifyTokenApiCall(this.props.api_url);
      if (!res.success) {
        this.props.history.push("/authentication");
        localStorage.removeItem("auth_token");
      }
    } catch (error) {
      console.warn(error);
    }
  };

  componentDidMount() {
    this.verify();
  }
  onFinish = (values) => {
    console.log(values);
  };
  render() {
    return (
      <div>
        <div className="home-container">
          <Header />
          <NavDrawer />
          <div className="add-mixtape-form-div">
            <div className="auth-form-container box-shadow">
              <div className="add-mixtape-form">
                <Form onFinish={this.onFinish} size="middle" layout="vertical">
                  <Form.Item>
                    <h1>Upload new Mixtape</h1>
                  </Form.Item>
                  <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                      {
                        required: true,
                        message: "Please enter a mixtape name",
                      },
                    ]}
                  >
                    <Input autoComplete="off" />
                  </Form.Item>
                  <Form.Item
                    name="category"
                    label="Category"
                    rules={[
                      {
                        required: true,
                        message: "Please enter a mixtape category",
                      },
                    ]}
                  >
                    <Select defaultValue="">
                      <Option key="Reggae" value="Reggae">
                        Reggae
                      </Option>
                      <Option key="dance-hal" value="Dance_Hall">
                        Dance Hall
                      </Option>
                      <Option key="oldies" value="Oldies">
                        Oldies
                      </Option>
                      <Option key="slows" value="Slows">
                        Slows
                      </Option>
                      <Option key="trap" value="Trap">
                        Trap
                      </Option>
                      <Option key="rnd" value="Rnb">
                        Rnb
                      </Option>
                    </Select>
                  </Form.Item>
                  <Form.Item name="caption" label="Caption">
                    <TextArea />
                  </Form.Item>
                  <Form.Item>
                    <Button htmlType="submit" loading={false} type="primary">
                      <Space>
                        Next <IoMdArrowForward />{" "}
                      </Space>
                    </Button>
                  </Form.Item>
                </Form>
              </div>
              <div className="auth-form-info">
                <h1>Details</h1>
                <p>Here you can add details about your mixtape</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    api_url: state.globalReducer.api_url,
  };
};

export default connect(mapStateToProps)(AddMixtapePage);
