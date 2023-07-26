/* eslint-disable react/prop-types */
import Modal from "@mui/material/Modal";
import { Box, Button, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
// import { useState } from 'react';
const TopModal = (props) => {
  const style = {
    top: '0',
    right: '0',
    zIndex: '9999',
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  return (
    <>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {props.label}
            </Typography>
            <Button
              onClick={props.Closeme}
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              {" "}
              <CloseIcon sx={{}} />{" "}
            </Button>
          </Box>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {props.title}
          </Typography>
          <Button
            sx={{
              marginTop: "30px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              className="mysubbtn"
              onClick={props.handelConfirmDelete}
              sx={{ marginLeft: "50px" ,background: "red"  }}
            >
              Confirm
            </Button>
            <Button
              variant="contained"
              className="mysubbtn mysubbtnreset"
              onClick={props.Closeme}
              sx={{ marginLeft: "50px", background: "green"  }}
            >
              {" "}
              Cancle
            </Button>
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default TopModal;
