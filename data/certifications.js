import etsLogo from "@/app/images/companies/ets.svg";
import etsDarkLogo from "@/app/images/companies/ets_dark.svg";
import freeCodeCampLogo from "@/app/images/companies/freecodecamp.svg";
import freeCodeCampDarkLogo from "@/app/images/companies/freecodecamp_dark.svg";
import ibmLogo from "@/app/images/companies/ibm.svg";
import ibmDarkLogo from "@/app/images/companies/ibm_dark.svg";

/**
 * Certifications, newest first.
 *
 * Rendered by two different views, which is why some fields look redundant:
 *  - `components/Certifications/Certifications.js` (home) shows a logo card and
 *    uses `shortTitle`, `date`, `issuer` and `logo`.
 *  - `components/Certifications/CertificationsTable.js` (/certifications) shows
 *    a table and uses `year`, `title`, `issuer`, `technologies` and `label`.
 *
 * @typedef {Object} Certification
 * @property {string} title        - Full name, shown in the table.
 * @property {string} [shortTitle] - Abbreviated name for the narrow home card; falls back to `title`.
 * @property {string} issuer       - Awarding organisation.
 * @property {string} date         - Month and year, shown on the home card.
 * @property {number} year         - Year, shown in the table.
 * @property {string} url          - Absolute URL of the public credential.
 * @property {string} label        - Text of the table's link column.
 * @property {string[]} technologies - Skills covered, rendered as pills in the table.
 * @property {{light: import("next/image").StaticImageData, dark: import("next/image").StaticImageData}} logo
 * @property {string} logoAlt      - Alt text for both logo variants.
 */

/** @type {Certification[]} */
export const certifications = [
  {
    title: "Test Of English for International Communication",
    issuer: "ETS",
    date: "June 2024",
    year: 2024,
    url: "https://www.etsglobal.org/fr/en/digital-score-report/95A1C364CF4BC38D1D702D808A8249FFEBF27BF11C785F6464CA05E76C390B25UVpXanM3VUd0YXUzRHpIWWszQ2ZDWGFjb1I2SURIbnFkRzVYQTZWbDROMHdLaHJx",
    label: "Certification",
    technologies: ["English", "Communication"],
    logo: { light: etsLogo, dark: etsDarkLogo },
    logoAlt: "ETS logo",
  },
  {
    // NOTE: `date` and `year` disagree (January 2020 vs 2023). Both values are
    // kept verbatim from the two pages that previously held their own copy of
    // this list, so neither page changes. Pick one and drop the other.
    title: "Cyber Security Operations and Technology Solutions",
    shortTitle: "Cyber Sec. Operations and Tech. Solutions",
    issuer: "IBM",
    date: "January 2020",
    year: 2023,
    url: "https://ibm-learning.udemy.com/certificate/UC-550b9f69-f7e3-4d14-9ffb-f9a6d6d813d7/",
    label: "Certification",
    technologies: ["CyberSec", "Cloud"],
    logo: { light: ibmLogo, dark: ibmDarkLogo },
    logoAlt: "IBM logo",
  },
  {
    title: "Data Visualization",
    issuer: "freeCodeCamp",
    date: "November 2021",
    year: 2021,
    url: "https://freecodecamp.org/certification/ibrahimadlani/data-visualization",
    label: "Certification",
    technologies: ["JavaScript", "Statistical Analysis", "D3.js"],
    logo: { light: freeCodeCampLogo, dark: freeCodeCampDarkLogo },
    logoAlt: "freeCodeCamp logo",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "November 2021",
    year: 2021,
    url: "https://freecodecamp.org/certification/ibrahimadlani/javascript-algorithms-and-data-structures",
    label: "Certification",
    technologies: ["JavaScript", "HTML/CSS", "DOM"],
    logo: { light: freeCodeCampLogo, dark: freeCodeCampDarkLogo },
    logoAlt: "freeCodeCamp logo",
  },
  {
    title: "Scientific Computing with Python",
    issuer: "freeCodeCamp",
    date: "February 2021",
    year: 2021,
    // The /certifications table used to link this entry to the JavaScript
    // Algorithms credential; corrected here to the Scientific Computing one.
    url: "https://freecodecamp.org/certification/ibrahimadlani/scientific-computing-with-python-v7",
    label: "Certification",
    technologies: ["Python", "Algorithms", "Data Structures"],
    logo: { light: freeCodeCampLogo, dark: freeCodeCampDarkLogo },
    logoAlt: "freeCodeCamp logo",
  },
];
