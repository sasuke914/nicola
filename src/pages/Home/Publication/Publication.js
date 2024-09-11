import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { GoArrowUpRight } from "react-icons/go";
import PublicationTitle from "./PublicationTitle";
import BlackBtn from "../../../components/Button/BlackBtn";
import { getPublist } from "../../../api/fetchAPI";
import END_POINT from "../../../config/config";

import { pubEye, pubHabr, pubHeart, pubMsg, pubRect, pubVcru, pubYoutube } from "../../../assets";

import "./publication.css";

const PubCell = (props) => {
  const views =
    props.item.metrics.views >= 1000
      ? `${Math.round(props.item.metrics.views / 1000)}k`
      : props.item.metrics.views;

  const date = new Date(props.item.date);
  const day =
    date &&
    new Date(props.item.date)
      .toLocaleString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
      .replace("г.", "");

  return (
    <div className="carComponent">
      <div className="carheader">
        <p className="carDate">{day}</p>
        {props.item.platform === "VC" && (
          <img src={pubVcru} alt="vcru" className="carPlatform" />
        )}
        {props.item.platform === "YouTube" && (
          <img src={pubYoutube} alt="Youtube" className="carPlatform" />
        )}
        {props.item.platform === "Habr" && (
          <img src={pubHabr} alt="Habr" className="carPlatform" />
        )}
      </div>
      <div className="carTitle">{props.item.title}</div>
      <div className="briefDescription">{props.item.description}</div>
      <div style={{ backgroundImage: `url(${END_POINT}/uploads/${props.item.image})` }} className="carImg"></div>
      <div className="carfooter">
        {props.item.platform === "VC" && (
          <a href="https://vc.ru/" target="_blank" rel="noopener noreferrer">
            <button className="carLinkBtn">
              {props.item.linktopub} &nbsp;
              <GoArrowUpRight style={{ fontSize: "20px" }} />
            </button>
          </a>
        )}
        {props.item.platform === "YouTube" && (
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="carLinkBtn">
              {props.item.linktopub} &nbsp;
              <GoArrowUpRight style={{ fontSize: "20px" }} />
            </button>
          </a>
        )}
        {props.item.platform === "Habr" && (
          <a
            href="https://habr.com/ru/articles/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="carLinkBtn">
              {props.item.linktopub} &nbsp;
              <GoArrowUpRight style={{ fontSize: "20px" }} />
            </button>
          </a>
        )}
        <div className="metrics">
          <div className="metricsItem">
            <img src={pubEye} alt="eye" />
            <div className="metricsNum">{views}</div>
          </div>
          <div className="metricsItem">
            <img src={pubHeart} alt="heart" />
            <div className="metricsNum">{props.item.metrics.likes}</div>
          </div>
          <div className="metricsItem">
            <img src={pubMsg} alt="circle" />
            <div className="metricsNum">{props.item.metrics.comments}</div>
          </div>
          <div className="metricsItem">
            <img src={pubRect} alt="rect" />
            <div className="metricsNum">{props.item.metrics.favourites}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Publication = () => {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    getPublist().then((data) => {
      if (data.error) {
        console.log("puberror:", data.error);
      } else {
        setPublications(data);
      }
    });
  }, []);

  return (
    <Box className="section" id="publication">
      <PublicationTitle />
      <Box className="carCompoWrap">
        {publications.map((item, idx) => {
          return <PubCell key={idx} item={item} />;
        })}
      </Box>
      <Box className="publicationBtn">
        <div style={{ display: "flex", justifyContent: "center", marginTop: "40px", }}>
          <BlackBtn title="Больше публикаций" />
        </div>
      </Box>
    </Box>
  );
};

export default Publication;
