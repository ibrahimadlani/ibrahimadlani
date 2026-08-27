import Header from "@/components/Panel/Header";
import Main from "@/components/Panel/Main";

export const metadata = {
  alternates: { canonical: "/" },
};

/**
 * Homepage: a sticky identity panel on the left and the scrolling content on
 * the right from `lg` up, stacked on smaller screens.
 *
 * @returns {JSX.Element}
 */
export default function HomePage() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4 transition">
      <Header />
      <Main />
    </div>
  );
}
