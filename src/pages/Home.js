import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Umanand Tripathi</h2>
        <div className="prompt">
          <p>A Digital marketer with a passion for coding & creating</p>
          <Link to="https://www.linkedin.com/in/umanand-tripathi/"><LinkedInIcon /></Link>
          <Link to="https://www.instagram.com/umanand_tripathi/"><InstagramIcon /></Link>
          <Link to="umanandtripathi05@gmail.com"><EmailIcon /></Link>
          <Link to="https://github.com/umanandt"><GitHubIcon /></Link>
        </div>
      </div>

      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              HTML, CSS, React, Bootstrap, MaterialUI, Javacsript, Wordpress,
              & Canva
            </span>
          </li>
          <li className="item">
            <h2>PPC</h2>
            <span>Google Ads, Facbook Ads, Twitter Ads, Linkedin Ads & Native Ads</span>
          </li>
          <li className="item">
            <h2>SEO</h2>
            <span>
              On Page SEO, Off Page SEO, Google Analytics, Google Tag Manager,
              Google Search Console, Keyword Planner, Semrush, Data Studio,
              Reporting, & Ubersuggest
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
