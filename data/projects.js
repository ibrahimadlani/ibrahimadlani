import lePetitFrameworkThumbnail from "@/app/images/lepetitframework_thumbnail.png";
import portfolioThumbnail from "@/app/images/thumbnail.png";
import projetM3202cThumbnail from "@/app/images/projetm3202c_thumbnail.png";

/**
 * Selected side projects.
 *
 * @typedef {Object} Project
 * @property {string} title        - Project name.
 * @property {string} url          - Absolute URL of the repository or demo.
 * @property {string} description  - One line summary.
 * @property {string[]} technologies - Stack used, rendered as pills.
 * @property {import("next/image").StaticImageData} imageSrc - Thumbnail.
 * @property {string} imageAlt     - Alt text for the thumbnail.
 * @property {string} [githubUrl]  - Repository URL behind the star count.
 * @property {number} [githubStars] - Star count; the badge is hidden when either field is missing.
 */

/** @type {Project[]} */
export const projects = [
  {
    title: "Build a web portfolio",
    url: "https://github.com/ibrahimadlani/ibrahimadlani",
    description:
      "A web portfolio repository free to use with documentation and tests.",
    technologies: ["NextJS", "JavaScript", "TailwindCSS", "AWS Amplify"],
    imageSrc: portfolioThumbnail,
    imageAlt: "Screenshot of the portfolio homepage",
  },
  {
    title: "LePetitFramework",
    url: "https://github.com/ibrahimadlani/LePetitFramework",
    description:
      "Very light weight PHP framework with adaptive database controller",
    technologies: ["PHP", "Bootstrap 4", "OOP"],
    imageSrc: lePetitFrameworkThumbnail,
    imageAlt: "LePetitFramework logo",
  },
  {
    title: "ProjectM3202c",
    url: "https://github.com/ibrahimadlani/ProjectM3202c",
    description:
      "Mathematical model solver for Malthus, Verhulst and Lotka-Volterra models.",
    technologies: ["PHP", "Python", "JavaScript"],
    imageSrc: projetM3202cThumbnail,
    imageAlt: "ProjectM3202c logo",
  },
];
