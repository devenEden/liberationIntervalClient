import React, { useState } from "react";
import Hero from "../../components/landing/Hero";
import { Layout, Space, Button, Modal } from "antd";
import music from "../../assets/images/music.jpg";
import mix from "../../assets/images/mix.jpg";
import { useHistory } from "react-router-dom";

const { Content } = Layout;

const LandingPage = () => {
  const history = useHistory();
  const [openMusicModal, setOpenMusicModal] = useState(false);
  const [openMixModal, setOpenMixModal] = useState(false);

  const showMusicModal = () => {
    setOpenMusicModal(true);
  };

  const handleMusicCancel = () => {
    setOpenMusicModal(false);
  };

  const showMixModal = () => {
    setOpenMixModal(true);
  };

  const handleMixCancel = () => {
    setOpenMixModal(false);
  };

  const showAboutModal = () => {
    history.push("/authentication");
  };

  return (
    <div className="bgDarkGray">
      <Content data-aos="fade-up" data-aos-duration="2000" className="content">
        <Hero data-aos="zoom-in" />
        <div className="contentNav">
          <Space className='ant-space-landing' xs={{ direction: "vertical" }}>
            <Button onClick={showMusicModal} id="btn">
              Music
            </Button>
            <Modal
              footer={null}
              onCancel={handleMusicCancel}
              visible={openMusicModal}
              title="Music"
            >
              <div className="imageHolder">
                <img src={music} alt="music" />
              </div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              soluta veniam, porro quas et adipisci vero corrupti. Cumque enim
              molestiae, labore harum et voluptatem reiciendis consequuntur
              dolorum beatae, asperiores Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Reiciendis voluptatibus minus doloremque minima,
              dolore molestiae? Aperiam debitis molestias eum voluptas officia.
              Expedita sint optio commodi voluptates eaque molestias blanditiis
              deleniti.
            </Modal>
            <Button onClick={showMixModal} id="btn">
              Mixtapes
            </Button>
            <Modal
              footer={null}
              onCancel={handleMixCancel}
              visible={openMixModal}
              title="DJ Mix Tapes"
            >
              <div className="imageHolder">
                <img src={mix} alt="music" />
              </div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              soluta veniam, porro quas et adipisci vero corrupti. Cumque enim
              molestiae, labore harum et voluptatem reiciendis consequuntur
              dolorum beatae, asperiores Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Reiciendis voluptatibus minus doloremque minima,
              dolore molestiae? Aperiam debitis molestias eum voluptas officia.
              Expedita sint optio commodi voluptates eaque molestias blanditiis
              deleniti.
            </Modal>
            <Button onClick={showAboutModal} id="btn">
              Get Started
            </Button>
          </Space>
        </div>
      </Content>
    </div>
  );
};

export default LandingPage;
