import React from 'react';
import thumbnail from "../../app/images/thumbnail.png";
import ProjectsItem from './ProjectsItem';
import lepetitframework_thumbnail from "../../app/images/lepetitframework_thumbnail.png";
import projetm3202c_thumbnail from "../../app/images/projetm3202c_thumbnail.png";

/**
 * Array of projects information
 */
const projects = [
  {
    title: "Build a web portfolio",
    url: "https://github.com/ibrahimadlani/ibrahimadlani",
    description: "A web portfolio repository free to use with documentation and tests.",
    technologies: ["NextJS", "JavaScript", "TailwindCSS", "AWS Amplify"],
    imageSrc: thumbnail,
    imageAlt: "Build a Spotify Connected App Newline course marketing card"
  },
  {
    title: "LePetitFramework",
    url: "https://github.com/ibrahimadlani/LePetitFramework",
    description: "Very light weight PHP framework with adaptive database controller",
    technologies: ["PHP", "Bootstrap 4", "OOP"],
    imageSrc: lepetitframework_thumbnail,
    imageAlt: "LePetitFramewsork logo"
  },
  {
    title: "ProjectM3202c",
    url: "https://github.com/ibrahimadlani/ProjectM3202c",
    description: "Mathematical model solver for Malthus, Verhulst and Lotka-Volterra models.",
    technologies: ["PHP", "Python", "JavaScript"],
    imageSrc: projetm3202c_thumbnail,
    imageAlt: "ProjectM3202c logo"
  }
];

/**
 * Projects component for displaying a list of selected projects.
 * This component includes project titles, descriptions, and links to their respective repositories.
 *
 * @returns {JSX.Element} The Projects component.
 */
const Projects = () => {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 dark:bg-darkBackground/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary dark:text-darkPrimary">
          Projects
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {projects.map((project, index) => (
            <ProjectsItem
              key={index}
              title={project.title}
              url={project.url}
              description={project.description}
              technologies={project.technologies}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
              githubUrl={project.githubUrl}
              githubStars={project.githubStars}
            />
          ))}
        </ul>
        <div className="mt-12">
          <a
            className="inline-flex items-center font-medium leading-tight text-primary dark:text-darkPrimary font-semibold text-primary group"
            aria-label="View All GitHub Project"
            target='_blank'
            href="https://github.com/ibrahimadlani?tab=repositories"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-accent dark:group-hover:border-accent motion-reduce:transition-none">
                View All GitHub
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b border-transparent pb-px transition group-hover:border-accent dark:group-hover:border-accent motion-reduce:transition-none">
                  {" "}Projects
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 dark:group-hover:translate-x-2 group-focus-visible:translate-x-2 dark:group-focus-visible:translate-x-2 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
