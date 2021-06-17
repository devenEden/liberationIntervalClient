import React from "react";
import { Avatar, Button, List } from "antd";
import { IoMdMusicalNote } from "react-icons/io";
const data = [
  {
    title: "Ant Design Title 1",
  },
];

const MusicContainer = () => {
  return (
    <div className="music-home-div">
      <div className="music-div-content">
        <h2>Trending music</h2>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={
                      "https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/52/b1/45/52b1452b-229e-78db-231b-7b43fa0077cc/075679956491.jpg/400x400cc.jpg"
                    }
                  />
                }
                title={<a href="https://ant.design">Talking To The Moon</a>}
                description="Bruno Mars"
              />
            </List.Item>
          )}
        />
        <br />
        <Button type="primary">
          More Music &nbsp; <IoMdMusicalNote />
        </Button>
      </div>
    </div>
  );
};

export default MusicContainer;
