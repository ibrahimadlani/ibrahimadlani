import Head from "next/head";

/**
 * Home component for the homepage layout.
 * This component renders the Header and Main components side by side on large screens.
 * It uses flexbox for layout and includes responsive gap spacing.
 *
 * @returns {JSX.Element} The Home component.
 */

export const Home = () => {
  const certifications = [
    {
      year: 2023,
      project: " Cyber Security Operations and Technology Solutions",
      madeAt: "IBM",
      builtWith: ["CyberSec", "Cloud"],
      link: "https://ibm-learning.udemy.com/certificate/UC-550b9f69-f7e3-4d14-9ffb-f9a6d6d813d7/",
      label: "Certification",
    },
    {
      year: 2021,
      project: "Data Visualization",
      madeAt: "freeCodeCamp",
      builtWith: ["JavaScript", "Statistical Anlaysis", "D3.js"],
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

  // Meta information for the Head component
  const metaTags = {
    title: "Ibrahim Adlani - Software Engineer",
    description:
      "Ibrahim Adlani's portfolio showcasing projects and skills in software engineering.",
    viewport: "width=device-width, initial-scale=1",
    ogTitle: "Ibrahim Adlani - Software Engineer",
    ogDescription:
      "Explore the projects and skills of Ibrahim Adlani, a software engineer specialized in Django, Restful APIs, Python, and JavaScript.",
    ogImage: "/images/profile.jpg",
    ogUrl: "https://www.ibrahimadlani.com",
    twitterCard: "summary_large_image",
    twitterTitle: "Ibrahim Adlani - Software Engineer",
    twitterDescription:
      "Explore the projects and skills of Ibrahim Adlani, a software engineer specialized in Django, Restful APIs, Python, and JavaScript.",
    twitterImage: "/images/profile.jpg",
  };

  return (
    <>
      <Head>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="viewport" content={metaTags.viewport} />
        <meta property="og:title" content={metaTags.ogTitle} />
        <meta property="og:description" content={metaTags.ogDescription} />
        <meta property="og:image" content={metaTags.ogImage} />
        <meta property="og:url" content={metaTags.ogUrl} />
        <meta name="twitter:card" content={metaTags.twitterCard} />
        <meta name="twitter:title" content={metaTags.twitterTitle} />
        <meta
          name="twitter:description"
          content={metaTags.twitterDescription}
        />
        <meta name="twitter:image" content={metaTags.twitterImage} />
      </Head>
      <div className="lg:py-24">
        <a
          className="group mb-2 inline-flex items-center font-semibold leading-tight text-accent"
          href="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            ></path>
          </svg>
          Ibrahim Adlani
        </a>
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          All Certifications
        </h1>
        <table id="content" className="mt-12 w-full border-collapse text-left">
          <thead className="sticky top-0 z-10 border-b border-muted/10 bg-background/75 px-6 py-5 backdrop-blur">
            <tr>
              <th className="py-4 pr-8 text-sm font-semibold text-primary">
                Year
              </th>
              <th className="py-4 pr-8 text-sm font-semibold text-primary">
                Project
              </th>
              <th className="hidden py-4 pr-8 text-sm font-semibold text-primary lg:table-cell">
                Made at
              </th>
              <th className="hidden py-4 pr-8 text-sm font-semibold text-primary lg:table-cell">
                Built with
              </th>
              <th className="hidden py-4 pr-8 text-sm font-semibold text-primary sm:table-cell">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {certifications.map((item, index) => (
              <tr
                key={index}
                className="border-b border-muted/10 last:border-none"
              >
                <td className="py-4 pr-4 align-top text-sm">
                  <div className="translate-y-px">{item.year}</div>
                </td>
                <td className="py-4 pr-4 align-top font-semibold leading-snug text-primary">
                  <div>
                    <div className="block sm:hidden">
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-primary hover:text-accent focus-visible:text-accent sm:hidden group/link text-base"
                        href={item.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${item.project} (opens in a new tab)`}
                      >
                        <span>
                          {item.project}
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
                      </a>
                    </div>
                    <div className="hidden sm:block">{item.project}</div>
                  </div>
                </td>
                <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                  <div className="translate-y-px whitespace-nowrap">
                    {item.madeAt}
                  </div>
                </td>
                <td className="hidden py-4 pr-4 align-top lg:table-cell">
                  <ul className="flex -translate-y-1.5 flex-wrap">
                    {item.builtWith.map((tech, techIndex) => (
                      <li key={techIndex} className="my-1 mr-1.5">
                        <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent ">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="hidden py-4 align-top sm:table-cell">
                  <ul className="translate-y-1">
                    <li className="mb-1 flex items-center">
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-primary hover:text-accent focus-visible:text-accent text-sm group/link text-sm"
                        href={item.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${item.link} (opens in a new tab)`}
                      >
                        <span>
                          <span className="inline-block">
                            {item.label}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
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
                    </li>
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
