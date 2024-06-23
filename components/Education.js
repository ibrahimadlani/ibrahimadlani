import React from 'react';
import EducationItem from './EducationItem';

// Main Education component
const Education = () => {
  // Array to store experience information
  const experiences = [
    {
      date: "Sep 22' — Aug 24'",
      role: "Master of Engineering, Computer Sciences",
      type: 'CY Tech',
      company: "Cergy, France",
      companyUrl: "https://cytech.cyu.fr/",
      description: "Theory and Algorithms, Distributed Development with JAVA EE, Design Patterns, Advanced Computer Networking, Tests and Verifications, Operational Cyber-Security, Data Administration and Processing, C++ Programming, Network and Systems Programming, Probability and Simulations, Data Exploration, User Interface Designing, and Web Programming.",
      technologies: ["GPA 3.5", "Software", "Infrastructure", "Cybersecurity"]
    },
    {
        date: "Sep 21' — Aug 22'",
        role: "Bachelor of Engineering, Computer Sciences",
        type: 'CY Tech',
        company: "Cergy, France",
        companyUrl: "https://cytech.cyu.fr/",
        description: "Completed courses in C Programming, Web Development, Unix Commands, Advanced Databases Programming, Computer Architecture, Analysis and JAVA Object-Oriented Programming, Operating Systems, Linear Optimisations, Advanced Procedural Algorithms, and Statistics.",
        technologies: ["GPA 3.5", "Software", "Infrastructure", "IA"]
      },
    {
      date: "Sep 19' — Aug 21'",
      role: "Associate Degree, Computer Sciences",
      type: 'Université Polytechnique Hauts-de-France',
      company: "Maubeuge, France",
      companyUrl: "https://uphf.com",
      description: "Studied Computer Systems, Advanced Algorithms, Data Structures, Database Programming and Administration, Computer Networking, Object-Oriented Programming, User Interface Design, Operating Systems, and Web Development.",
      technologies: ["GPA 3.7", "Algorithms", "Data Structures", "Networking"]
    }
  ];

  return (
    // Main section for work experience
    <section
      id="education"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      {/* Sticky header for the section on small screens */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary ">
          Education
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {experiences.map((experience, index) => (
            <EducationItem
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

export default Education;
