/**
 * Academic background, newest first.
 *
 * @typedef {Object} Education
 * @property {string} date        - Human readable period, e.g. `"Sep 22' — Aug 24'"`.
 * @property {string} degree      - Degree earned.
 * @property {string} school      - Institution name.
 * @property {string} location    - City and country.
 * @property {string} schoolUrl   - Absolute URL of the institution.
 * @property {string} description - Coursework summary.
 * @property {string[]} topics    - Highlights, rendered as pills.
 */

/** @type {Education[]} */
export const education = [
  {
    date: "Sep 22' — Aug 24'",
    degree: "Master of Engineering, Computer Sciences",
    school: "CY Tech",
    location: "Cergy, France",
    schoolUrl: "https://cytech.cyu.fr/",
    description:
      "Theory and Algorithms, Distributed Development with JAVA EE, Design Patterns, Advanced Computer Networking, Tests and Verifications, Operational Cyber-Security, Data Administration and Processing, C++ Programming, Network and Systems Programming, Probability and Simulations, Data Exploration, User Interface Designing, and Web Programming.",
    topics: ["GPA 3.5", "Software", "Infrastructure", "Cybersecurity"],
  },
  {
    date: "Sep 21' — Aug 22'",
    degree: "Bachelor of Engineering, Computer Sciences",
    school: "CY Tech",
    location: "Cergy, France",
    schoolUrl: "https://cytech.cyu.fr/",
    description:
      "Completed courses in C Programming, Web Development, Unix Commands, Advanced Databases Programming, Computer Architecture, Analysis and JAVA Object-Oriented Programming, Operating Systems, Linear Optimisations, Advanced Procedural Algorithms, and Statistics.",
    topics: ["GPA 3.5", "Software", "Infrastructure", "AI"],
  },
  {
    date: "Sep 19' — Aug 21'",
    degree: "Associate Degree, Computer Sciences",
    school: "Université Polytechnique Hauts-de-France",
    location: "Maubeuge, France",
    schoolUrl: "https://uphf.fr",
    description:
      "Studied Computer Systems, Advanced Algorithms, Data Structures, Database Programming and Administration, Computer Networking, Object-Oriented Programming, User Interface Design, Operating Systems, and Web Development.",
    topics: ["GPA 3.7", "Algorithms", "Data Structures", "Networking"],
  },
];
