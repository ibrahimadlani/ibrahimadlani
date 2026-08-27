import { projects } from "@/data/projects";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import Section from "@/components/ui/Section";
import ProjectsItem from "./ProjectsItem";

const UNDERLINE_CLASS_NAME =
  "border-b border-transparent pb-px transition group-hover:border-accent motion-reduce:transition-none";

/**
 * Selected projects section, plus a link to the full list of repositories.
 *
 * @returns {JSX.Element}
 */
const Projects = () => (
  <Section id="projects" title="Projects" ariaLabel="Selected projects">
    <ul className="group/list">
      {projects.map((project) => (
        <ProjectsItem key={project.url} {...project} />
      ))}
    </ul>
    <div className="mt-12">
      <a
        className="group inline-flex items-center font-semibold leading-tight text-primary dark:text-darkPrimary"
        href="https://github.com/ibrahimadlani?tab=repositories"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="View All GitHub Projects (opens in a new tab)"
      >
        <span>
          <span className={UNDERLINE_CLASS_NAME}>View All GitHub</span>
          <span className="whitespace-nowrap">
            <span className={UNDERLINE_CLASS_NAME}> Projects</span>
            <ArrowRightIcon className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
          </span>
        </span>
      </a>
    </div>
  </Section>
);

export default Projects;
