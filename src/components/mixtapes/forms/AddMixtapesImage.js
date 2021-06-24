import React from "react";
import { Form, Button, Space, Upload, message } from "antd";
import {
  IoMdArrowDropdown,
  IoMdArrowForward,
  IoMdArrowUp,
} from "react-icons/io";
import { sendFormDataToServer } from "../../../api/generalApiCalls";
import { useDispatch, useSelector } from "react-redux";
import {
  setMixtapeForm,
  toggleAddMixtapeLoading,
} from "../../../actions/mixtapeActions";

const AddMixtapeImage = () => {
  const loading = useSelector(
    (state) => state.mixtapeReducer.uploadmixtapesLoading
  );
  const api_url = useSelector((state) => state.globalReducer.api_url);
  const dispatch = useDispatch();

  const submitCoverImageForm = async (values) => {
    dispatch(toggleAddMixtapeLoading(true));
    const formData = {
      name: Object.keys(values)[0],
      file: values.coverImage.file.originFileObj,
    };
    console.log(values.coverImage.file.originFileObj);
    const config = {
      method: "PATCH",
      contentType: "multipart/form-data",
    };
    const res = await sendFormDataToServer(
      `${api_url}/api/mixtapes/create/coverImage`,
      formData,
      config
    );
    try {
      if (!res.success) message.error(res.error);
      else {
        localStorage.setItem("addMixtapeStep", "audio");
        dispatch(setMixtapeForm("audio"));
        message.info("Image cover has been uploaded");
      }
      dispatch(toggleAddMixtapeLoading(false));
    } catch (error) {
      console.log("Error Occured uploading mixtape image");
      dispatch(toggleAddMixtapeLoading(false));
      message.error("Sorry we are having some trouble uploading your cover");
    }
  };
  return (
    <div className="auth-form-container box-shadow">
      <div className="add-mixtape-form">
        <Form
          validateTrigger="onBlur"
          onFinish={submitCoverImageForm}
          size="middle"
          layout="vertical"
        >
          <Form.Item>
            <h1>Upload new Mixtape</h1>
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Please add a cover image" }]}
            name="coverImage"
            label="Upload"
          >
            <Upload listType="picture" maxCount={1}>
              <Button type="primary">
                <Space>
                  Cover Image <IoMdArrowUp />
                </Space>
              </Button>
            </Upload>
          </Form.Item>
          <br />
          <Form.Item>
            <Space>
              <Button htmlType="submit" loading={loading} type="primary">
                <Space>
                  Continue <IoMdArrowForward />
                </Space>
              </Button>
              <Button htmlType="button">
                <Space>
                  Cancel <IoMdArrowDropdown />
                </Space>
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
      <div className="auth-form-info">
        <h1>Cover Image </h1>
        <p>
          Add Cover Image of the mixtape. You can your profile picture or any
          picture you want to appear as the cover of your mixtape
        </p>
      </div>
    </div>
  );
};

export default AddMixtapeImage;
