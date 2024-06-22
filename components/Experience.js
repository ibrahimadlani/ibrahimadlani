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
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur arcu ullamcorper, pretium dolor egestas, gravida turpis. Nulla pretium, leo non blandit ullamcorper, nibh lectus ornare dui, et lobortis ante nibh non eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus dolor eros, non faucibus ex tincidunt ut. Nunc in malesuada libero, sit amet porttitor ex.",
      technologies: ["Python", "Django", "Jenkins", "MatLab"]
    },
    {
      date: "Jun 23' — Jun 24'",
      role: "Software Engineer, Apprentice",
      type: 'Paris, France',
      company: "Deezer",
      companyUrl: "https://deezer.com",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur arcu ullamcorper, pretium dolor egestas, gravida turpis. Nulla pretium, leo non blandit ullamcorper, nibh lectus ornare dui, et lobortis ante nibh non eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus dolor eros, non faucibus ex tincidunt ut. Nunc in malesuada libero, sit amet porttitor ex.",
      technologies: ["Python", "Django", "HTML & CSS", "Bootstrap 5", "JavaScript", "Jenkins", "Docker"]
    },
    {
      date: "Sep 21' — May 23'",
      role: "Software Engineer, Apprentice",
      type: 'Lille, France',
      company: "IBM",
      companyUrl: "https://www.ibm.com/",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur arcu ullamcorper, pretium dolor egestas, gravida turpis. Nulla pretium, leo non blandit ullamcorper, nibh lectus ornare dui, et lobortis ante nibh non eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus dolor eros, non faucibus ex tincidunt ut. Nunc in malesuada libero, sit amet porttitor ex.",
      technologies: ["Python", "Shell", "QRadar", "IBM SOAR"]
    }
    ,
    {
      date: "Jun 21' — Aug 21'",
      role: "Software Engineer, Intern",
      type: 'Valenciennes, France',
      company: "UPHF",
      companyUrl: "https://www.uphf.fr/",
      description: "Worked with a team of two engineering student for a European university consortium to build a web platform for data visualization and comparison tools based on the different KPIs of the consortium's university administrations.",
      technologies: ["PostgreSQL", "Shell", "PHP", "Sass"]
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
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary lg:sr-only">
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
              description={experience.description}
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
