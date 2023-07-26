/* eslint-disable react/prop-types */
import Modal from "@mui/material/Modal";
import { Box, Button, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// import { useState } from 'react';
const ModelsEdit = (props) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
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
        Editopen={props.Editopen}
        onClose={props.handleCloseEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {props.Editlabel}
            </Typography>
            <Button
              onClick={props.EditCloseme}
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              {" "}
              <CloseIcon sx={{ marginLeft: "150px" }} />{" "}
            </Button>
          </Box>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {props.Edittitle}
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
            
            >
              Confirm
            </Button>
            <Button variant="contained" className="mysubbtn mysubbtnreset">
              {" "}
              Cancle
            </Button>
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default ModelsEdit;
