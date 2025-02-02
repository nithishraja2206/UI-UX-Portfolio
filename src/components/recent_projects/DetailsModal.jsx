import React, { useState } from "react";
import "./DetailsModal.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ProjectDetails } from "./Menu";
import { IoMdClose } from "react-icons/io";
import { ImParagraphLeft } from "react-icons/im";
import { FaLink } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import Role from "../../assets/Easy.png";
import Skills from "../../assets/Learning.png";

const DetailsModal = ({ openModal, projectId, handleClose, theme }) => {
  const projectFields = [
    { title: "Project Description", key: "description" },
    { title: "Website", key: "website" },
    { title: "Figma Link", key: "figma" },
    { title: "My Role", key: "myRole" },
    { title: "Skills", key: "skills" },
  ];
  const icons = {
    description: <ImParagraphLeft />,
    website: <img src={Role} alt="Website" className="icon-img-margin" />,
    figma: <FiFigma />,
    myRole: <FaLink />,
    skills: <img src={Skills} alt="Skills" className="icon-img-margin" />,
  };

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
          <div className="projects-sticky-container">
            <IoMdClose className="projects-close-icon" onClick={handleClose} />
          </div>
          <div className="project-modal-titleImg-container">
            <img
              className="titleImg"
              src={ProjectDetails[projectId - 1]?.image}
            ></img>
          </div>
          <div className="project-content-container">
            <h2 className="project-tab__panel-title">
              {ProjectDetails[projectId - 1]?.title}
            </h2>
            {projectFields.map(({ title, key }) => (
              <div key={key} className="project-details-grid">
                <div className="d-flex">
                  {icons[key] && (
                    <span className="project-icon">{icons[key]}</span>
                  )}
                  <p className="project-details-text-title">{title}</p>
                </div>

                {key === "myRole" &&
                Array.isArray(ProjectDetails[projectId - 1]?.[key]) ? (
                  <ul className="bullet-list">
                    {ProjectDetails[projectId - 1][key].map((role, index) => (
                      <li className="project-details-text" key={index}>
                        {role}
                      </li>
                    ))}
                  </ul>
                ) : key === "skills" ? (
                  <div className="skills-items">
                    {ProjectDetails[projectId - 1]?.[key].map((item, index) => (
                      <p className={`skills-items-${index}`}>{item}</p>
                    ))}
                  </div>
                ) : (
                  <p className="project-details-text">
                    {ProjectDetails[projectId - 1]?.[key]}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default DetailsModal;
