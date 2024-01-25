/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Portfolio page.jpg";

const imageAltText = "Geethika Shoba, Portfolio Page Background Image";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Kidney Disease Detection",
    description:
      "This repository contains a Python-based machine learning project for the early detection of kidney disease.",
    url: "https://github.com/geethikaxshoba/kidney-disease-detection",
  },
  {
    title: "Safe-Stree (App Design",
    description:
      "Designed an mobile application which ensures the safety of women in the society.",
    url: "https://www.figma.com/file/UfOwZsRWqmnnkb5JckVeJH/SAFE-STREE?type=design&node-id=0-1&mode=design",
  },
  {
    title: "My Resume Site",
    description:
      "Created and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "http://geethikaxshoba.me/My-Portfolio/",
  },
  {
    title: "Easy Path-a-shala",
    description:
      "Check out my YouTube channel where I teach about the basics of lastest Technology and Programming.",
    url: "https://yt.openinapp.co/lm6p1fg",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
