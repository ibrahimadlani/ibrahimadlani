import Description from "./Description";

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
      </main>
    );
  };
  
  export default Main;