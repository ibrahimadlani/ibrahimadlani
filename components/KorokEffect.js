/**
 * KorokEffect component for displaying a list of characters with hover color effects.
 * 
 * @param {Object} props - The properties object.
 * @param {string[]} props.characters - The list of characters to display.
 * @param {string[]} props.colors - The list of colors for each character on hover.
 * @returns {JSX.Element} The KorokEffect component.
 */

const KorokEffect = ({ characters, colors }) => (
    <span className="group/korok inline-flex lg:cursor-[url('/images/koroks/Elma.png'),_pointer] lg:font-medium lg:text-[#302020]">
      <span className="sr-only">Korok seeds</span>
      {characters.map((char, index) => (
        <span
          key={index}
          className={`group-hover/korok:text-${colors[index]}-400 transition duration-75 group-hover/korok:-translate-y-px delay-[${50 + index * 25}ms]`}
          aria-hidden="true"
        >
          {char}
        </span>
      ))}
    </span>
  );
  
  export default KorokEffect;