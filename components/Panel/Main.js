import About from "@/components/About/About";
import Certifications from "@/components/Certifications/Certifications";
import Education from "@/components/Education/Education";
import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer/Footer";
import Projects from "@/components/Projects/Projects";

/**
 * Scrolling half of the homepage. `id="content"` is the target of the skip link
 * and of in-page navigation.
 *
 * @returns {JSX.Element}
 */
const Main = () => (
  <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
    <About />
    <Experience />
    <Education />
    <Projects />
    <Certifications />
    <Footer />
  </main>
);

export default Main;
