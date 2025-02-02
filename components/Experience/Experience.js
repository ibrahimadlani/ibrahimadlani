import React from 'react';
import ExperienceItem from './ExperienceItem';
import { useTheme } from 'next-themes';

/**
 * Main Experience component
 * This component renders a list of work experiences, each as an ExperienceItem.
 *
 * @returns {JSX.Element} The Experience component.
 */

const Experience = () => {
  const { theme } = useTheme();
  // Array to store experience information
  const experiences = [
    {
      date: "Jun 24' — Sep 24'",
      role: "Software Engineer, Intern",
      type: 'Leuven, Belgium',
      company: "Septentrio",
      companyUrl: "https://septentrio.com",
      descriptions: [
        "Currently interning as a Software Engineer, developing tools to assist hardware engineers in their tasks.",
        "My responsibilities include creating file encryption tools, calculation and conversion tools for position and time formats, and enabling interaction with data center machines.",
        "The tools are developed using Python and Django, streamlining and enhancing the efficiency of engineering processes."
      ],
      technologies: ["Python", "Django", "Jenkins", "Matlab"]
    },
    {
      date: "Jun 23' — Jun 24'",
      role: "Software Engineer, Apprentice",
      type: 'Paris, France',
      company: "Deezer",
      companyUrl: "https://deezer.com",
      descriptions: [
        "Advanced quality assurance methodologies in web application development at Deezer, leveraging Django, React, and Kubernetes within an Agile framework.",
        "Spearheaded UX design for a sophisticated prototype using Figma, and developed RESTful APIs, enhancing team efficiency and application performance.",
        "Championed front-end development, demonstrating expertise in coding standards and software engineering best practices, while collaborating closely with senior software engineers.",
        "Trained extensively in QA technologies such as Appium, Selenium, and mobile testing (Android & iOS), contributing to higher software quality and reliability.",
        "Initiated and led innovative software solutions, focusing on algorithmic efficiency and robust data structure applications, to streamline centralized test result management."
      ],
      technologies: ["Python", "Django", "HTML & CSS", "Bootstrap 5", "JavaScript", "Jenkins", "Docker"]
    },
    {
      date: "Sep 21' — May 23'",
      role: "Software Engineer, Apprentice",
      type: 'Lille, France',
      company: "IBM",
      companyUrl: "https://www.ibm.com/",
      descriptions: [
        "Wrote performant and robust Python code for a diverse array of client and internal projects.",
        "Led multiple projects related to specific client technical requests",
        "Communicate and collaborate with multi-disciplinary teams of engineers, infrastructure experts, clients, and stakeholders daily.",
        "Automated various redundant processes and documentation tasks with Python and bash scripts to increase the team’s productivity by at least 20%."
      ],
      technologies: ["Python", "Shell", "QRadar", "IBM SOAR"]
    },
    {
      date: "Jun 21' — Aug 21'",
      role: "Software Engineer, Intern",
      type: 'Valenciennes, France',
      company: "UPHF",
      companyUrl: "https://www.uphf.fr/",
      descriptions: [
        "Worked with a team of two engineering student for a European university consortium to build a web platform for data visualization and comparison tools based on the different KPIs of the consortium's university administrations.",
        "Led the team in gathering, processing, and statistically analyzing collected data.",
        "Interfaced with all project clients weekly, providing technical expertise and knowledge."
      ],
      technologies: ["PostgreSQL", "Shell", "PHP", "Statistical analysis"]
    },
    {
      date: "Apr 21' — Jun 21'",
      role: "Software Engineer, Intern",
      type: 'Charleville-Mézières, France',
      company: "CD08",
      companyUrl: "https://www.cd08.fr/",
      descriptions: [
        "Engineered a PHP interface between the French ministry of education’s ticket systems and the departmental council JIRA platform to decentralize the department ticketing process.",
        "Create a script to automatically parse incoming XML files from an automated emailing system. ",
        "Architected multiple MySQL databases to store properly all the parsed elements.",
        "Developed a JS single-page application to track the inventory shifts for the department laboratory.",
      ],
      technologies: ["PHP", "GLPI", "SMTP", "Shell", "PostgreSQL"]
    },
    {
      date: "Sep 20' — Apr 21'",
      role: "Software Engineer, Apprentice",
      type: 'Reims, France',
      company: "Enedis",
      companyUrl: "https://www.enedis.fr/",
      descriptions: [
        "Developed and ship highly interactive web services that allow Enedis regional managers across the country to track their human and financial resources and make more data-driven decisions. ",
        "Designed and implement an optimized MySQL database following the Boyce-Codd Normal Form on a headless CentOS server.",
        "Wrote performant python scripts to map, clean, and populate the database with raw data from more than ten million rows of multiple Excel sheets.",
        "Engineered a data dashboard with dynamic charts including statistical analysis (univariate, bivariate analysis) using javascript frameworks such as React and Chart.js.",
      ],
      technologies: ["PostgreSQL", "Shell", "PHP", "Laravel", "MySQL", "GitHub"]
    }
  ];

  return (
    // Main section for work experience
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      {/* Sticky header for the section on small screens */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen sm:bg-transparent bg-background/75 dark:bg-darkBackground/75 dark:md:bg-transparent  px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary dark:text-darkPrimary">
          Experience
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={index}
              date={experience.date}
              role={experience.role}
              type={experience.type}
              company={experience.company}
              companyUrl={experience.companyUrl}
              descriptions={experience.descriptions}
              technologies={experience.technologies}
            />
          ))}
        </ol>

        {/* Link to the full resume */}
        <div className="mt-12">
          <a
            className="inline-flex items-baseline font-medium leading-tight text-primary dark:text-darkPrimary hover:text-accent dark:hover:text-accent focus-visible:text-accent dark:focus-visible:text-accent font-semibold text-primary group/link text-base"
            href={`${theme === 'dark' ? '/resume_ibrahimadlani_D20240925.pdf' : '/resume_ibrahimadlani_L20240925.pdf'}`}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View Full Résumé (opens in a new tab)"
          >
            <span>
              View Full{" "}
              <span className="inline-block">
                Résumé
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
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

export default Experience;
