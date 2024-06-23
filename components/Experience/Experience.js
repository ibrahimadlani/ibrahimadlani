import React from 'react';
import ExperienceItem from './ExperienceItem';

// Main Experience component
const Experience = () => {
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
      technologies: ["Python", "Django", "Jenkins", "MatLab"]
    },
    {
      date: "Jun 23' — Jun 24'",
      role: "Software Engineer, Apprentice",
      type: 'Paris, France',
      company: "Deezer",
      companyUrl: "https://deezer.com",
      descriptions: [
        "As a Software Engineer in the Quality Assurance department, I collaborated with an agile team to develop a web application using Django and React.",
        "I contributed to the RESTful API and UX design, and specialized in QA testing technologies such as Appium and Selenium.",
        "As the front-end reference, I showcased my expertise in front-end development and design, ensuring high code quality and adherence to agile methodologies."
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
        "As a Software Engineer in the Security Operational Center, I developed Python modules for IBM SOAR software.",
        "I collaborated with a team of security software engineers, adhering to agile methodologies and Python PEP8 coding standards.",
        "I independently created scripts to automate workflow diagram schematization, significantly improving the team's efficiency.",
        "This role provided valuable exposure to applicative cybersecurity and advanced Python development."
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
        "Worked with a team of two engineering student for a European university consortium to build a web platform for data visualization and comparison tools based on the different KPIs of the consortium's university administrations."
      ],
      technologies: ["PostgreSQL", "Shell", "PHP", "Sass"]
    },
    {
      date: "Apr 21' — Jun 21'",
      role: "Software Engineer, Intern",
      type: 'Charleville-Mézières, France',
      company: "CD08",
      companyUrl: "https://www.cd08.fr/",
      descriptions: [
        "As part of my end-of-studies internship, I developed an autonomous PHP interface between the Ministry of National Education's API and the department's ticketing system.",
        "This centralized technical issues for direct technician response and automated the parsing of SMTP emails with XML to enrich the GLPI database, delivering a high-quality code product ahead of schedule."
      ],
      technologies: ["PHP", "Shell", "PostgreSQL"]
    },
    {
      date: "Sep 20' — Apr 21'",
      role: "Software Engineer, Apprentice",
      type: 'Reims, France',
      company: "Enedis",
      companyUrl: "https://www.enedis.fr/",
      descriptions: [
        "As a Software Engineer apprentice, I developed a data visualization application using Vanilla JavaScript, Chart.js, and PHP.",
        "This tool enabled Enedis Reims managers to better forecast end-of-year directives and manage finances and manpower more effectively, improving overall resource planning and decision-making."
      ],
      technologies: ["PostgreSQL", "Shell", "PHP", "Laravel"]
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
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary ">
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
            className="inline-flex items-baseline font-medium leading-tight text-primary hover:text-accent focus-visible:text-accent font-semibold text-primary group/link text-base"
            href="/resume.pdf"
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