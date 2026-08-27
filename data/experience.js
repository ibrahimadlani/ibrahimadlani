/**
 * Work experience, newest first.
 *
 * @typedef {Object} Experience
 * @property {string} date         - Human readable period, e.g. `"Jun 24' — Sep 24'"`.
 * @property {string} role         - Job title held during the period.
 * @property {string} location     - City and country.
 * @property {string} company      - Employer name.
 * @property {string} companyUrl   - Absolute URL of the employer.
 * @property {string[]} descriptions - Bullet points describing the work.
 * @property {string[]} technologies - Stack used, rendered as pills.
 */

/** @type {Experience[]} */
export const experiences = [
  {
    date: "Jun 24' — Sep 24'",
    role: "Software Engineer, Intern",
    location: "Leuven, Belgium",
    company: "Septentrio",
    companyUrl: "https://septentrio.com",
    descriptions: [
      "Currently interning as a Software Engineer, developing tools to assist hardware engineers in their tasks.",
      "My responsibilities include creating file encryption tools, calculation and conversion tools for position and time formats, and enabling interaction with data center machines.",
      "The tools are developed using Python and Django, streamlining and enhancing the efficiency of engineering processes.",
    ],
    technologies: ["Python", "Django", "Jenkins", "Matlab"],
  },
  {
    date: "Jun 23' — Jun 24'",
    role: "Software Engineer, Apprentice",
    location: "Paris, France",
    company: "Deezer",
    companyUrl: "https://deezer.com",
    descriptions: [
      "Advanced quality assurance methodologies in web application development at Deezer, leveraging Django, React, and Kubernetes within an Agile framework.",
      "Spearheaded UX design for a sophisticated prototype using Figma, and developed RESTful APIs, enhancing team efficiency and application performance.",
      "Championed front-end development, demonstrating expertise in coding standards and software engineering best practices, while collaborating closely with senior software engineers.",
      "Trained extensively in QA technologies such as Appium, Selenium, and mobile testing (Android & iOS), contributing to higher software quality and reliability.",
      "Initiated and led innovative software solutions, focusing on algorithmic efficiency and robust data structure applications, to streamline centralized test result management.",
    ],
    technologies: [
      "Python",
      "Django",
      "HTML & CSS",
      "Bootstrap 5",
      "JavaScript",
      "Jenkins",
      "Docker",
    ],
  },
  {
    date: "Sep 21' — May 23'",
    role: "Software Engineer, Apprentice",
    location: "Lille, France",
    company: "IBM",
    companyUrl: "https://www.ibm.com/",
    descriptions: [
      "Wrote performant and robust Python code for a diverse array of client and internal projects.",
      "Led multiple projects related to specific client technical requests",
      "Communicate and collaborate with multi-disciplinary teams of engineers, infrastructure experts, clients, and stakeholders daily.",
      "Automated various redundant processes and documentation tasks with Python and bash scripts to increase the team’s productivity by at least 20%.",
    ],
    technologies: ["Python", "Shell", "QRadar", "IBM SOAR"],
  },
  {
    date: "Jun 21' — Aug 21'",
    role: "Software Engineer, Intern",
    location: "Valenciennes, France",
    company: "UPHF",
    companyUrl: "https://www.uphf.fr/",
    descriptions: [
      "Worked with a team of two engineering student for a European university consortium to build a web platform for data visualization and comparison tools based on the different KPIs of the consortium's university administrations.",
      "Led the team in gathering, processing, and statistically analyzing collected data.",
      "Interfaced with all project clients weekly, providing technical expertise and knowledge.",
    ],
    technologies: ["PostgreSQL", "Shell", "PHP", "Statistical analysis"],
  },
  {
    date: "Apr 21' — Jun 21'",
    role: "Software Engineer, Intern",
    location: "Charleville-Mézières, France",
    company: "CD08",
    companyUrl: "https://www.cd08.fr/",
    descriptions: [
      "Engineered a PHP interface between the French ministry of education’s ticket systems and the departmental council JIRA platform to decentralize the department ticketing process.",
      "Create a script to automatically parse incoming XML files from an automated emailing system. ",
      "Architected multiple MySQL databases to store properly all the parsed elements.",
      "Developed a JS single-page application to track the inventory shifts for the department laboratory.",
    ],
    technologies: ["PHP", "GLPI", "SMTP", "Shell", "PostgreSQL"],
  },
  {
    date: "Sep 20' — Apr 21'",
    role: "Software Engineer, Apprentice",
    location: "Reims, France",
    company: "Enedis",
    companyUrl: "https://www.enedis.fr/",
    descriptions: [
      "Developed and ship highly interactive web services that allow Enedis regional managers across the country to track their human and financial resources and make more data-driven decisions. ",
      "Designed and implement an optimized MySQL database following the Boyce-Codd Normal Form on a headless CentOS server.",
      "Wrote performant python scripts to map, clean, and populate the database with raw data from more than ten million rows of multiple Excel sheets.",
      "Engineered a data dashboard with dynamic charts including statistical analysis (univariate, bivariate analysis) using javascript frameworks such as React and Chart.js.",
    ],
    technologies: [
      "PostgreSQL",
      "Shell",
      "PHP",
      "Laravel",
      "MySQL",
      "GitHub",
    ],
  },
];
