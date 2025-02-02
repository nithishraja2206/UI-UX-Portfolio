import React, { useState } from "react";
import "./Portfolio.css";
import Menu from "./Menu";
import { RiLink } from "react-icons/ri";
import { FaFigma } from "react-icons/fa";

import { motion } from "framer-motion";
import DetailsModal from "./DetailsModal";

const Portfolio = ({ theme }) => {
  const [items, setItems] = useState(Menu);
  const [activeFilter, setActiveFilter] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [projectId, setProjectId] = useState(1);

  const handleModalClick = (Id) => {
    setProjectId(Id);
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const filterItems = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category.includes(categoryItem);
    });

    setItems(updatedItems);
  };

  return (
    <section
      className="portfolio container section"
      id="portfolio"
      data-theme={theme}
    >
      <h2 className="section__title">Recent Projects</h2>

      <div className="portfolio__filters">
        <span
          className={
            activeFilter === 0
              ? "portfolio__item portfolio__item-active"
              : "portfolio__item"
          }
          onClick={() => {
            setItems(Menu);
            setActiveFilter(0);
          }}
        >
          All
        </span>
        <span
          className={
            activeFilter === 1
              ? "portfolio__item portfolio__item-active"
              : "portfolio__item"
          }
          onClick={() => {
            filterItems("Web");
            setActiveFilter(1);
          }}
        >
          Web
        </span>
        <span
          className={
            activeFilter === 2
              ? "portfolio__item portfolio__item-active"
              : "portfolio__item"
          }
          onClick={() => {
            filterItems("App");
            setActiveFilter(2);
          }}
        >
          App
        </span>
      </div>

      <div className="portfolio__container grid">
        {items.map((elem) => {
          const { id, image, title, category, url, repositoryUrl } = elem;

          return (
            <>
              <motion.div
                layout
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="portfolio__card"
                key={id}
                onClick={() => {
                  handleModalClick(id);
                }}
              >
                <div className="portfolio__thumbnail">
                  <img
                    src={image}
                    alt=""
                    className="portfolio__img"
                    height="267"
                  />
                  <div className="portfolio__mask"></div>
                </div>

                <span className="portfolio__category">
                  {category.join(", ")}
                </span>
                <h3 className="portfolio__title">{title}</h3>
                <div className="portfolio_links">
                  {url && (
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="portfolio__button"
                    >
                      <RiLink className="portfolio__button-icon" />
                    </a>
                  )}
                  {repositoryUrl && (
                    <a
                      href={repositoryUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`portfolio__github-button ${
                        url ? "left-large" : "left-small"
                      }`}
                    >
                      <FaFigma className="portfolio__button-icon" />
                    </a>
                  )}
                </div>
              </motion.div>
            </>
          );
        })}
      </div>
      <DetailsModal
        openModal={openModal}
        projectId={projectId}
        handleClose={handleModalClose}
        theme={theme}
      />
    </section>
  );
};

export default Portfolio;
