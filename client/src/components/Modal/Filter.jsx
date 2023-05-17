import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TuneIcon from "@mui/icons-material/Tune";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Filter() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button
        onClick={handleOpen}
        className="flex items-center justify-center w-10 h-10 sm:w-[45px] sm:h-[45px] rounded-[10px] bg-[#0B2585] hover:bg-blue-800 duration-300 focus:ring-4 focus:ring-blue-300">
        <TuneIcon className="text-white" />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Filter
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            FILTERS
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
