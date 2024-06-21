import DescriptionLink from "./DescriptionLink";
import KorokEffect from "./KorokEffect";
import Link from "next/link";

/**
 * Description component for the "About me" section.
 * This component provides a brief introduction and background, with links to various external resources.
 *
 * @returns {JSX.Element} The Description component.
 */
const Description = () => {
  const korokCharacters = ["A", "n", "o", "u", "a", "r"];
  const korokColors = ["red", "orange", "yellow", "green", "sky", "violet"];

  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#302020] lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4">
          Back in 2012, when I was just 12 years old, my brother{" "}
          <Link href={"https://anouar.adlani.com/"}>
            <KorokEffect characters={korokCharacters} colors={korokColors} />
          </Link>{" "}
          introduced me to the world of coding with HTML and CSS. That initial
          spark ignited a passion for programming and web development that has
          only grown over the years. Fast-forward to today, and I’ve had the
          privilege of building software solutions for{" "}
          <DescriptionLink
            href="https://deezer.com/"
            ariaLabel="advertising agency (opens in a new tab)"
          >
            Deezer
          </DescriptionLink>
          ,{" "}
          <DescriptionLink
            href="https://ibm.com/"
            ariaLabel="advertising agency (opens in a new tab)"
          >
            IBM
          </DescriptionLink>
          , and{" "}
          <DescriptionLink
            href="https://enedis.fr/"
            ariaLabel="advertising agency (opens in a new tab)"
          >
            Enedis
          </DescriptionLink>
          .
        </p>
        <p className="mb-4">
          My main focus these days is developing robust, secure, and
          user-friendly software applications. I thrive in the intersection of
          design and technology, ensuring that my creations are not only
          visually appealing but also built with solid engineering principles.
          In my free time, I’ve also led several innovative initiatives and
          created scripts to automate and streamline workflows, significantly
          enhancing team productivity.
        </p>
        <p>
          When I’m not coding, you can find me exploring new hiking trails,
          indulging in a good book, or experimenting with new recipes in the
          kitchen. Whether at work or at play, I’m always looking for new
          challenges and opportunities to learn and grow.
        </p>
      </div>
    </section>
  );
};

export default Description;
