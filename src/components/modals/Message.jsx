import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "max-content",
  height: "max-content",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const PointList = ({ points }) => (
  <ul>
    {points.map((point, index) => (
      <li key={index}>{point}</li>
    ))}
  </ul>
);

const Text = ({ text }) => (
  <Typography>
    {text}
  </Typography>
);

export default function MessageModal(props) {
  const { showModal, handleClose, messageText } = props;
  const { title, description, message } = messageText;
  return (
    <div>
      <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            {description}
          </Typography>
          <Box sx={{
            marginLeft: "30px"
          }}>
            {message.points ? (<PointList points={message.points} />) : <Text/> }
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
