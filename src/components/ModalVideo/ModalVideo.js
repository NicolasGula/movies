import { useState, useEffect } from "react";
import { Modal } from "antd";
import ReactPlayer from "react-player";

import "./modalVideo.scss";

const ModalVideo = (props) => {
  const { videoKey, videoPlatform, isOpen, close } = props;
  return (
    <Modal
      className="modal-video"
      visible={isOpen}
      centered
      onCancel={close}
      footer={false}
    >
      Este es mi modal
    </Modal>
  );
};

export default ModalVideo;
