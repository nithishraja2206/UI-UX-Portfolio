import React, { useState } from "react";
import "./DetailsModal.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ProjectDetails } from "./Menu";

const DetailsModal = ({ openModal, projectId, handleClose, theme }) => {
  return (
    <>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className="project-modal-box"
          data-theme={theme}
          sx={{
            backgroundColor: theme === "dark" ? "#202020" : "white",
          }}
        >
          <div className="project-modal-titleImg-container">
            <img
              className="titleImg"
              src={ProjectDetails[projectId - 1]?.image}
            ></img>
          </div>
          <h2 className="tab__panel-title">
            {ProjectDetails[projectId - 1]?.title}
          </h2>
        </Box>
      </Modal>
    </>
  );
};

export default DetailsModal;
