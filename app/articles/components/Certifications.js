 import CertificationsItem from "./CertificationsItem";
 
 // Certification data
  const certifications = [
    {
      year: 2023,
      project: "Cyber Security Operations and Technology Solutions",
      madeAt: "IBM",
      builtWith: ["CyberSec", "Cloud"],
      link: "https://ibm-learning.udemy.com/certificate/UC-550b9f69-f7e3-4d14-9ffb-f9a6d6d813d7/",
      label: "Certification",
    },
    {
      year: 2021,
      project: "Data Visualization",
      madeAt: "freeCodeCamp",
      builtWith: ["JavaScript", "Statistical Analysis", "D3.js"],
      link: "https://freecodecamp.org/certification/ibrahimadlani/data-visualization",
      label: "Certification",
    },
    {
      year: 2021,
      project: "JavaScript Algorithms and Data Structures",
      madeAt: "freeCodeCamp",
      builtWith: ["JavaScript", "HTML/CSS", "DOM"],
      link: "https://freecodecamp.org/certification/ibrahimadlani/javascript-algorithms-and-data-structures",
      label: "Certification",
    },
    {
      year: 2021,
      project: "Scientific Computing with Python",
      madeAt: "freeCodeCamp",
      builtWith: ["Python", "Algorithms", "Data Structures"],
      link: "https://freecodecamp.org/certification/ibrahimadlani/javascript-algorithms-and-data-structures",
      label: "Certification",
    },
  ];


const Certifications = () => {
  return (
    <table
          id="content"
          className="mt-12 w-full border-collapse text-left"
        >
          <thead className="sticky top-0 z-10 border-b border-muted/10 dark:border-darkMuted/10 bg-background/75 dark:bg-darkBackground/75 px-6 py-5 backdrop-blur">
            <tr>
              <th className="py-4 pr-8 text-sm font-semibold text-primary dark:text-darkPrimary">
                Year
              </th>
              <th className="py-4 pr-8 text-sm font-semibold text-primary dark:text-darkPrimary">
                Project
              </th>
              <th className="hidden py-4 pr-8 text-sm font-semibold text-primary dark:text-darkPrimary lg:table-cell">
                Made at
              </th>
              <th className="hidden py-4 pr-8 text-sm font-semibold text-primary dark:text-darkPrimary lg:table-cell">
                Built with
              </th>
              <th className="hidden py-4 pr-8 text-sm font-semibold text-primary dark:text-darkPrimary sm:table-cell">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {certifications.map((item, index) => (
              <CertificationsItem
                key={index}
                year={item.year}
                project={item.project}
                madeAt={item.madeAt}
                builtWith={item.builtWith}
                link={item.link}
                label={item.label}
              />
            ))}
          </tbody>
        </table>
  )
}

export default Certifications