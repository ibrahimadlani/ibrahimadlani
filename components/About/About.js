import Section from "@/components/ui/Section";
import AboutLink from "./AboutLink";
import KorokEffect from "./KorokEffect";

/**
 * Introduction section.
 *
 * @returns {JSX.Element}
 */
const About = () => (
  <Section id="about" title="About" ariaLabel="About me">
    <p className="mb-4 text-secondary dark:text-darkSecondary">
      Back in 2012, when I was just 12 years old, my brother{" "}
      <AboutLink
        href="https://anouar.adlani.com/"
        ariaLabel="Anouar Adlani (opens in a new tab)"
        unstyled
      >
        <KorokEffect />
      </AboutLink>{" "}
      introduced me to the world of coding with HTML and CSS. That initial spark
      ignited a passion for programming and web development that has only grown
      over the years. Fast-forward to today, and I’ve had the privilege of
      building software solutions for{" "}
      <AboutLink
        href="https://deezer.com/"
        ariaLabel="Deezer (opens in a new tab)"
      >
        Deezer
      </AboutLink>
      ,{" "}
      <AboutLink href="https://ibm.com/" ariaLabel="IBM (opens in a new tab)">
        IBM
      </AboutLink>
      , and{" "}
      <AboutLink
        href="https://enedis.fr/"
        ariaLabel="Enedis (opens in a new tab)"
      >
        Enedis
      </AboutLink>
      .
    </p>
    <p className="mb-4 text-secondary dark:text-darkSecondary">
      My main focus these days is developing robust, secure, and user-friendly
      software applications. I thrive in the intersection of design and
      technology, ensuring that my creations are not only visually appealing but
      also built with solid engineering principles. In my free time, I’ve also
      led several innovative initiatives and created scripts to automate and
      streamline workflows, significantly enhancing team productivity.
    </p>
    <p className="text-secondary dark:text-darkSecondary">
      When I’m not coding, you can find me exploring new hiking trails,
      indulging in a good book, or experimenting with new recipes in the
      kitchen. Whether at work or at play, I’m always looking for new challenges
      and opportunities to learn and grow.
    </p>
  </Section>
);

export default About;
