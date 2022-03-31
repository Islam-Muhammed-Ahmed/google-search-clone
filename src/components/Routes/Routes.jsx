import React from "react";
import { Container, Row } from "react-bootstrap";
import { Routes, Route,Navigate } from "react-router-dom";
import Search from "../Search/Search";
import Results from "../Results/Results";

const MyRoutes = () => {
  const Googleroutes = ["/search", "/image", "/news", "/video"];
  return (
    <Container fluid>
      <Row>
        <Routes>
          <Route path="/" element={<Navigate to="/search" />} />

          {Googleroutes.map((path, idx) => (
            <Route key={idx} path={path} element={<Results />} />
          ))}
        </Routes>
      </Row>
    </Container>
  );
};

export default MyRoutes;
