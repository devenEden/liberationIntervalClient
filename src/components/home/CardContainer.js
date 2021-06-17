import React from "react";
import { Card } from "antd";
import img from "../../assets/s263939.jpg";

const { Meta } = Card;
const CardContainer = () => {
  return (
    <div className="mixtapes-container">
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

export default CardContainer;
