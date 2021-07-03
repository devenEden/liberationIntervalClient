import React from "react";
import { Form, Button, Space, Upload, message, Modal } from "antd";
import { IoMdArrowDropdown, IoMdArrowUp, IoMdCheckmark } from "react-icons/io";
import { sendFormDataToServer } from "../../../api/generalApiCalls";
import { useDispatch, useSelector } from "react-redux";
import {
  setMixtapeForm,
  toggleAddMixtapeLoading,
} from "../../../actions/mixtapeActions";

const AddMixtapeAudio = () => {
  const api_url = useSelector((state) => state.globalReducer.api_url);
  const loading = useSelector(
    (state) => state.mixtapeReducer.uploadmixtapesLoading
  );
  const dispatch = useDispatch();
  const submitAudioForm = async (values) => {
    dispatch(toggleAddMixtapeLoading(true));
    const formData = {
      name: Object.keys(values)[0],
      file: values.audioMixtape.file.originFileObj,
    };
    console.log(values.audioMixtape.file.originFileObj);
    const config = {
      method: "PATCH",
      contentType: "multipart/form-data",
    };
    const res = await sendFormDataToServer(
      `${api_url}/api/mixtapes/create/mixtapeAudio`,
      formData,
      config
    );
    try {
      if (!res.success) message.error(res.error);
      else {
        localStorage.removeItem("addMixtapeStep");
        dispatch(setMixtapeForm("details"));
        Modal.success({
          content: "Your mixtape was uploaded succesfully",
        });
      }
      dispatch(toggleAddMixtapeLoading(false));
    } catch (error) {
      dispatch(toggleAddMixtapeLoading(false));
      console.log("Error Occured uploading mixtape image");
      message.error("Sorry we are having some trouble uploading your cover");
    }
  };
  return (
    <div className="auth-form-container box-shadow">
      <div className="add-mixtape-form">
        <Form
          onFinish={submitAudioForm}
          encType="multipart/formdata"
          size="middle"
          layout="vertical"
        >
          <Form.Item>
            <h1>Upload mixtape Audio</h1>
          </Form.Item>
          <Form.Item name="audioMixtape" label="Upload" listType="picture">
            <Upload listType="picture" maxCount={1}>
              <Button type="primary">
                <Space>
                  Mixtape Audio <IoMdArrowUp />
                </Space>
              </Button>
            </Upload>
          </Form.Item>
          <br />
          <Form.Item>
            <Space>
              <Button htmlType="submit" loading={loading} type="primary">
                <Space>
                  Finish <IoMdCheckmark />
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
      {/* <div className="auth-form-info">
        <h1>Upload the mixtape</h1>
        <p>Upload the audio mixtape</p>
      </div> */}
    </div>
  );
};

export default AddMixtapeAudio;
