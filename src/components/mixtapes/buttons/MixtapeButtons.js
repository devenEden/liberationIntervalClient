import { Button, message, Space } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { downloadFileFromServer } from "../../../api/generalApiCalls";
import AudioPlayer from "../AudioPlayer";

const MixtapeButtons = () => {
  const [downloadLoading, setDownloadLoading] = useState(false);
  const mixtape = useSelector(
    (state) => state.mixtapeReducer.singleMixtapeData
  );
  const api_url = useSelector((state) => state.globalReducer.api_url);

  const audioUrl = (url) => {
    let audioUrl;
    for (let i = 0; i <= url.length; i++) {
      audioUrl = mixtape.audioUrl.substr(i);
    }
    return audioUrl;
  };

  const downloadMixtape = async () => {
    setDownloadLoading(true);
    try {
      const url = `public${audioUrl(api_url)}`;
      const urlBody = {
        fileUrl: url,
      };
      //const config = { contentType: "application/json", method: "post" };
      const res = await downloadFileFromServer(
        `${api_url}/api/mixtapes/downloads`,
        urlBody,
        { method: "Post", contentType: "application/json" }
      );
      res.blob().then((blob) => {
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url;
        a.download = mixtape.name;
        document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
        a.click();
        a.remove(); //afterwards we remove the element again
      });
      //  message.success("Your download will start now");
      setDownloadLoading(false);
    } catch (error) {
      console.error(error);
      setDownloadLoading(false);
      message.error("Sorry an error occured while processing your download");
    }
  };

  return (
    <div className="-mixtape-action-btns">
      <Space>
        <Button type="default">Follow</Button>
        <Button
          loading={downloadLoading}
          onClick={downloadMixtape}
          type="primary"
        >
          Download
        </Button>
      </Space>
      <AudioPlayer />
    </div>
  );
};

export default MixtapeButtons;
