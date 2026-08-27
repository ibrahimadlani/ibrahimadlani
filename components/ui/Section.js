/**
 * A homepage section with the heading that sticks to the top of the viewport on
 * small screens and scrolls away with the content from `lg` up.
 *
 * @param {Object} props
 * @param {string} props.id       - Anchor target; must match an entry of `data/navigation.js`.
 * @param {string} props.title    - Heading text, rendered uppercase.
 * @param {string} props.ariaLabel - Accessible name of the section.
 * @param {React.ReactNode} props.children - Body of the section.
 * @returns {JSX.Element}
 */
const Section = ({ id, title, ariaLabel, children }) => (
  <section
    id={id}
    className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    aria-label={ariaLabel}
  >
    <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 backdrop-blur dark:bg-darkBackground/75 sm:bg-transparent dark:md:bg-transparent px-6 py-5 md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0">
      <h2 className="text-sm font-bold uppercase tracking-widest text-primary dark:text-darkPrimary">
        {title}
      </h2>
    </div>
    <div>{children}</div>
  </section>
);

export default Section;
