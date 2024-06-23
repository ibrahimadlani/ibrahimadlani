import Certifications from "./Certifications";
import Description from "./Description";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";

/**
 * Main component for the main content area of the webpage.
 * This component provides the main content container, styled with padding and responsive width.
 * The id attribute is set to "content" for accessibility and navigation purposes.
 *
 * @returns {JSX.Element} The Main component.
 */

const Main = () => {
    return (
      <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
        <Description />
        <Experience />
        <Education />
        <Projects />
        <Certifications />
        
      </main>
    );
  };
  
  export default Main;