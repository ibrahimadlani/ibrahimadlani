/**
 * KorokEffect component for displaying a list of characters with hover color effects.
 *
 * @param {Object} props - The properties object.
 * @param {string[]} props.characters - The list of characters to display.
 * @param {string[]} props.colors - The list of colors for each character on hover.
 * @returns {JSX.Element} The KorokEffect component.
 */

const KorokEffect = ({ characters, colors }) => (
  <span className="group/korok inline-flex lg:cursor-[url('/images/koroks/Elma.png'),_pointer] lg:font-medium lg:text-primary">
    <span className="sr-only">Anouar</span>
    <span
      className="group-hover/korok:text-red-400 transition duration-75 group-hover/korok:-translate-y-px delay-[50ms]"
      aria-hidden="true"
    >
      A
    </span>
    <span
      className="group-hover/korok:text-orange-400 transition duration-75 group-hover/korok:-translate-y-px delay-[75ms]"
      aria-hidden="true"
    >
      n
    </span>
    <span
      className="group-hover/korok:text-yellow-400 transition duration-75 group-hover/korok:-translate-y-px delay-[100ms]"
      aria-hidden="true"
    >
      o
    </span>
    <span
      className="group-hover/korok:text-green-400 transition duration-75 group-hover/korok:-translate-y-px delay-[125ms]"
      aria-hidden="true"
    >
      u
    </span>
    <span
      className="group-hover/korok:text-sky-400 transition duration-75 group-hover/korok:-translate-y-px delay-[150ms]"
      aria-hidden="true"
    >
      a
    </span>
    <span
      className="group-hover/korok:text-violet-400 transition duration-75 group-hover/korok:-translate-y-px delay-[175ms]"
      aria-hidden="true"
    >
      r
    </span>

  </span>
);

export default KorokEffect;
