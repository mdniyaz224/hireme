/* eslint-disable react/prop-types */
import Modal from "@mui/material/Modal";
import { Box, Button, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
// import { useState } from 'react';
const Models = (props) => {
  const { t } = useTranslation();
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
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {t(props.label)}
              
            </Typography>
            <Button
              onClick={props.Closeme}
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <CloseIcon sx={{ color: "black", fontSize: "30px" }} />{" "}
            </Button>
          </Box>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {t(props.title)}
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
              sx={{ marginLeft: "50px", background: "red" }}
            >
              
              {t("Confirm")}
            </Button>
            <Button
              variant="contained"
              className="mysubbtn mysubbtnreset"
              onClick={props.Closeme}
              sx={{ marginLeft: "50px", background: "green" }}
            >
              
             
              {t("Cancel")}
            </Button>
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default Models;
