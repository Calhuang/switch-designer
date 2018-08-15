import React, { Component } from "react";
import styles from "./App.css";
import Layout from "./containers/Layout";
import LogoLinked from "./assets/linked.png";
import LogoGit from "./assets/github.png";

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Layout />
        <footer className={styles.Footer}>
          Calvin Huang
          <a
            href="https://github.com/Calhuang/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "red",
              "margin-left": "5px"
            }}
          >
            <img src={LogoGit} alt="github" width="24px" height="24px" />Github
          </a>
          <a
            href="https://www.linkedin.com/in/calhuang1/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "red",
              "margin-left": "5px"
            }}
          >
            <img src={LogoLinked} alt="linkedin" width="30px" height="24px" />LinkedIn
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
