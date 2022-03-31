import React from "react";
import { Link } from "react-router-dom";
import { FcSearch } from "react-icons/fc";
import { Button, Container, Row } from "react-bootstrap";
import Search from "../Search/Search";

import styles from "./Navbar.module.css";
import Links from "../Routes/Links/Links";
// import Results from "../Results/Results";

const MainNav = ({ darkTheme, setDarkTheme }) => {
  return (
    <Container fluid className="p-5 pb-0 border-bottom">
      <Row>
        <div className="d-flex justify-content-between flex-wrap align-items-center">
          {/* <div className="col-sm-6 col-md-4">
            <Link to="/search">
              <Button className={styles.searchIcon}>
                search <FcSearch />
              </Button>
            </Link>
          </div> */}
          <div className="col-sm-12 col-md-4">
            <Search />
          </div>
          <div className="col-sm-12 m-2 col-md-4">
            <Button
              className={`${styles.searchIcon} shadow-lg ${
                darkTheme.mode === "dark" ? "btn-light" : "btn-dark"
              }`}
              type="submit"
              onClick={() =>
                setDarkTheme(
                  darkTheme.mode === "dark"
                    ? { mode: "light" }
                    : { mode: "dark" }
                )
              }
            >
              {darkTheme.mode === "dark" ? "Light ☀️" : "Dark 🌙"}
            </Button>
          </div>
        </div>
      </Row>
      <Row className="w-75">
        <Links />
      </Row>
    </Container>
  );
};

export default MainNav;
