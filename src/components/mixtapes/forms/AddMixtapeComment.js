import { Button, Form, message } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  addMixtapeCommentError,
  addMixtapeCommentRequest,
} from "../../../actions/mixtapeActions";
import { sendDataToServer } from "../../../api/generalApiCalls";

const AddMixtapeComment = () => {
  const api_url = useSelector((state) => state.globalReducer.api_url);
  const history = useHistory();
  const routePathArray = history.location.pathname.split("/");
  const comments = useSelector((state) => state.mixtapeReducer.mixtapeComments);
  const loading = useSelector(
    (state) => state.mixtapeReducer.addMixtapeCommentLoading
  );
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    dispatch(
      addMixtapeCommentRequest({ success: false, comments, loading: true })
    );
    const res = await sendDataToServer(
      `${api_url}/api/mixtapes/comments/${routePathArray[2]}`,
      values,
      { method: "Post", contentType: "application/json" }
    );
    try {
      const newComments = [
        { ...res.data.comment, username: res.data.username },
        ...comments,
      ];
      dispatch(
        addMixtapeCommentRequest({
          success: res.success,
          loading: false,
          comments: newComments,
        })
      );
      message.success("Your comment was added");
    } catch (error) {
      console.error(error);
      dispatch(addMixtapeCommentError({ success: false, loading: false}));
      message.error(res.error);
    }
  };

  return (
    <>
      <Form onFinish={onFinish} size="small" layout="vertical">
        <Form.Item
          name="comment"
          rules={[{ required: true, message: "Please add a comment" }]}
        >
          <TextArea />
        </Form.Item>
        <Form.Item>
          <Button
            loading={loading}
            size="middle"
            htmlType="submit"
            type="primary"
          >
            Add Comment
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddMixtapeComment;
