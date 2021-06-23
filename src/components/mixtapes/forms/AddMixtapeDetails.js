import React from "react";
import { Form, Input, Button, Select, Space, message } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { IoMdArrowForward } from "react-icons/io";
import { sendDataToServer } from "../../../api/generalApiCalls";
import { useDispatch, useSelector } from "react-redux";
import {
  addMixtapesDetailsError,
  toggleAddMixtapeLoading,
} from "../../../actions/mixtapeActions";

const { Option } = Select;

const AddMixtapeDetails = () => {
  const loading = useSelector(
    (state) => state.mixtapeReducer.uploadmixtapesLoading
  );
  const api_url = useSelector((state) => state.globalReducer.api_url);
  const dispatch = useDispatch();

  const submitMixtapeDetails = async (values) => {
    dispatch(toggleAddMixtapeLoading(true));
    const config = {
      method: "post",
      contentType: "application/json",
    };
    const res = await sendDataToServer(
      `${api_url}/api/mixtapes/create/details`,
      values,
      config
    );
    try {
      dispatch(
        addMixtapesDetailsError({
          loading: false,
          success: res.success,
          details: res.data,
          form: "coverImage",
        })
      );
      localStorage.setItem("mixtapeId", res.data.mixtapeId);
      localStorage.setItem("addMixtapeStep", "coverImage");
      message.info('Mixtape details have been added ......');
    } catch (error) {
      message.error(
        "Sorry an error occured while uploading the mixtape details"
      );
      dispatch(
        addMixtapesDetailsError({
          loading: false,
          success: false,
          details: {},
          form: "details",
        })
      );
      console.error("Error occured while uploading details to server");
    }
  };

  return (
    <div className="auth-form-container box-shadow">
      <div className="add-mixtape-form">
        <Form
          preserve={true}
          onFinish={submitMixtapeDetails}
          size="middle"
          layout="vertical"
        >
          <Form.Item>
            <h1>Upload new Mixtape</h1>
          </Form.Item>
          <Form.Item
            preserve={true}
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
              <Option key="reggae" value="Reggae">
                Reggae
              </Option>
              <Option key="dance-hall" value="Dance_Hall">
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
              <Option key="rnb" value="Rnb">
                Rnb
              </Option>
              <Option key="mixed" value="Mixed">
                Mixed
              </Option>
            </Select>
          </Form.Item>
          <Form.Item name="caption" label="Caption">
            <TextArea />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" loading={loading} type="primary">
              <Space>
                Continue <IoMdArrowForward />
              </Space>
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="auth-form-info">
        <h1>Details</h1>
        <p>
          Here you can add details about your mixtape.
          <br /> If the upload is not completed the mixtape infor mation will
          saved under drafts which can be acessed from settings
        </p>
      </div>
    </div>
  );
};

export default AddMixtapeDetails;
