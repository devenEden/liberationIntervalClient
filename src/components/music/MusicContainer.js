import React from "react";
import { Card } from "antd";
import img from "../../assets/s263939.jpg";

const { Meta } = Card;

const MusicContainer = () => {
  return (
    <div className="mixtapes-container">
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src="https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/52/b1/45/52b1452b-229e-78db-231b-7b43fa0077cc/075679956491.jpg/400x400cc.jpg"
          />
        }
      >
        <Meta title="Talking To The Moon" description="Bruno Mars" />
      </Card>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/4f/fe/b7/4ffeb7fd-e789-4faf-db3d-8145e19775fd/21UMGIM17772.rgb.jpg/400x400cc.jpg" />}
      >
        <Meta title="Follow You" description="Imagine Dragons" />
      </Card>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={img} />}
      >
        <Meta title="DJ Name" description="name of mixtape" />
      </Card>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={img} />}
      >
        <Meta title="DJ Name" description="name of mixtape" />
      </Card>
    </div>
  );
};

export default MusicContainer;
