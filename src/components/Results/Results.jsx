import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import ReactPlayer from "react-player";

import { useResultContext } from "../../context/ResultContextProvider";
import RingLoader from "../Loading/RingLoader";

import styles from "./result.module.css";
import { Container, Row } from "react-bootstrap";

const Results = () => {
  const { results, isLoading, getResult, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === "/videos") {
        getResult(`/search/q=${searchTerm} videos`);
      } else {
        getResult(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm, location.pathname]);

  if (isLoading) return <RingLoader />;

  switch (location.pathname) {
    case "/search":
      return (
        <div
          className={`${styles.mainContainer} d-flex justify-content-between flex-wrap w-100 my-5`}
        >
          {results?.map(({ link, title, additional_links }, index) => (
            <div key={index} className="col-sm-12 col-md-6">
              <p style={{ fontSize: "1.4rem" }}>
                {additional_links?.[0].text} <br />
                <a
                  href={additional_links?.[0].href}
                  target="_blank"
                  rel="noreferrer"
                >
                  visit
                </a>
              </p>
              <a href={link} target="_blank" rel="noreferrer">
                <p>{title.description}</p>
                <p className={styles.firstPara}>
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className={styles.secondPara}>{title}</p>
              </a>
              <hr className="w-50" />
            </div>
          ))}
        </div>
      );
    case "/image":
      return (
        <div className="d-flex flex-wrap justify-content-center align-items-center col-sm-6 col-md-6 w-auto">
          {results?.map(({ image, link: { href, title } }, index) => (
            <div key={index}>
              <a
                href={href}
                key={index}
                target="_blank"
                rel="noreferrer"
                className="p-sm-3 nav-link p-md-5"
              >
                <img
                  src={image?.src}
                  alt={title}
                  className="img-fluid"
                  loading="lazy"
                  key={index}
                />
                <p className="w-75 text-break text-primary text-decoration-underline mt-3">
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
    case "/news":
      return (
        <div
          className={`${styles.mainContainer} d-flex justify-content-between flex-wrap w-100 my-5 align-items-center`}
        >
          {results?.map(({ links, id, source, title }) => (
            <div key={id} className="w-75">
              <a href={links?.[0].href} target="_blank" rel="noreferrer">
                <p>{title.description}</p>
                <p className={styles.secondPara}>{title}</p>
              </a>
              <div className="d-flex gap-3">
                <a href={source?.href} target="_blank" rel="noreferrer">
                  {source?.href}
                </a>
              </div>
            </div>
          ))}
        </div>
      );
    case "/video":
      return (
        <Container fluid>
          <Row>
            <div className="d-flex flex-wrap w-100">
              {results?.map((video, index) => (
                <div className="p-2" key={index}>
                  {video?.additional_links?.[0]?.href && (
                    <ReactPlayer
                      url={video.additional_links?.[0].href}
                      controls
                      width="30vw"
                      height="200px"
                      style={{ borderRadius: "80px" }}
                    />
                  )}
                </div>
              ))}
            </div>
          </Row>
        </Container>
      );
    default:
      return "error";
  }
};

export default Results;
