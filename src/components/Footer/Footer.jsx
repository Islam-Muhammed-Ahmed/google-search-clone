import React from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <footer className="bg-dark text-secondary mt-5 border-4">
      <div className={`${styles.country} p-3`}>Egypt</div>
      <hr className={styles.divider} />
      <div className="google_links d-flex align-items-center flex-wrap justify-content-evenly">
        <Link
          target="_blank"
          className={`${styles.color} nav-link`}
          to="https://about.google/?utm_source=google-EG&utm_medium=referral&utm_campaign=hp-footer&fg=1"
        >
          About
        </Link>
        <Link
          target="_blank"
          className={`${styles.color} nav-link`}
          to="https://about.google/?utm_source=google-EG&utm_medium=referral&utm_campaign=hp-footer&fg=1"
        >
          Advertising
        </Link>
        <Link
          target="_blank"
          className={`${styles.color} nav-link`}
          to="https://about.google/?utm_source=google-EG&utm_medium=referral&utm_campaign=hp-footer&fg=1"
        >
          Business
        </Link>
        <Link
          target="_blank"
          className={`${styles.color} nav-link`}
          to="https://about.google/?utm_source=google-EG&utm_medium=referral&utm_campaign=hp-footer&fg=1"
        >
          How Search Works
        </Link>
        <Link
          target="_blank"
          className={`${styles.color} nav-link`}
          to="https://about.google/?utm_source=google-EG&utm_medium=referral&utm_campaign=hp-footer&fg=1"
        >
          Privacy
        </Link>
        <Link
          target="_blank"
          className={`${styles.color} nav-link`}
          to="https://about.google/?utm_source=google-EG&utm_medium=referral&utm_campaign=hp-footer&fg=1"
        >
          Terms
        </Link>
        <Link
          target="_blank"
          className={`${styles.color} nav-link`}
          to="https://about.google/?utm_source=google-EG&utm_medium=referral&utm_campaign=hp-footer&fg=1"
        >
          Settings
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
