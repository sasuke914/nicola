import { Box, IconButton, Stack } from "@mui/material";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";

import Carousel from "../../../../components/Carousel/Carousel";

import { play } from "../../../../assets";

import "../userlist.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
};

export default function PreviewImage({ selected, open, setOpen }) {
  return (
    <Modal
      sx={{ background: "rgba(0, 0, 0, 0.78)" }}
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} sx={{ position: "absolute", top: "-7%", width: "103%" }}>
          <img src={play} style={{ width: "30px", height: "30px" }} alt="playIcon" />
          <IconButton sx={{ color: "white" }} onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <Carousel selected={selected} />
      </Box>
    </Modal>
  );
}
