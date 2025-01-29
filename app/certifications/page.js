
import Certifications from "./components/Certifications";

/**
 * Home component for the homepage layout.
 * This component renders the Header and Main components side by side on large screens.
 * It uses flexbox for layout and includes responsive gap spacing.
 *
 * @returns {JSX.Element} The Home component.
 */
export const Home = () => {


  // Meta information for the Head component
  const metaTags = {
    title: "Ibrahim Adlani - Software Engineer",
    description:
      "Ibrahim Adlani's portfolio showcasing projects and skills in software engineering.",
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
    
      <div className="lg:py-24">
        <a
          className="group mb-2 inline-flex items-center font-semibold leading-tight text-accent dark:text-darkAccent"
          href="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2 dark:group-hover:-translate-x-2"
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
        <h1 className="text-4xl font-bold tracking-tight text-primary dark:text-darkPrimary sm:text-5xl">
          All Certifications
        </h1>
        <Certifications />
      </div>
    
  );
};

export default Home;