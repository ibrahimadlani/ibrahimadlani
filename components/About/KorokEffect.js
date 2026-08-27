/**
 * Per-letter hover colour and stagger, in order, matching the letters of
 * "Anouar". The class names are spelled out in full so Tailwind's scanner can
 * find them in this file.
 */
const LETTERS = [
  { character: "A", className: "group-hover/korok:text-red-400 delay-[50ms]" },
  { character: "n", className: "group-hover/korok:text-orange-400 delay-[75ms]" },
  { character: "o", className: "group-hover/korok:text-yellow-400 delay-[100ms]" },
  { character: "u", className: "group-hover/korok:text-green-400 delay-[125ms]" },
  { character: "a", className: "group-hover/korok:text-sky-400 delay-[150ms]" },
  { character: "r", className: "group-hover/korok:text-violet-400 delay-[175ms]" },
];

/**
 * The author's brother's name, whose letters light up and hop one after another
 * on hover — a nod to the Koroks of Breath of the Wild, cursor included.
 *
 * Each letter is its own `aria-hidden` span, so a visually hidden copy of the
 * name carries the text for assistive technology.
 *
 * The cursor image path is resolved by PostCSS relative to
 * app/styles/globals.css — do not move that file or the image.
 *
 * @returns {JSX.Element}
 */
const KorokEffect = () => (
  <span className="group/korok inline-flex lg:cursor-[url('../../app/images/cursor_monkey.png'),_pointer] font-medium text-primary dark:text-darkPrimary">
    <span className="sr-only">Anouar</span>
    {LETTERS.map(({ character, className }, index) => (
      <span
        key={`${character}-${index}`}
        className={`${className} transition duration-75 group-hover/korok:-translate-y-px`}
        aria-hidden="true"
      >
        {character}
      </span>
    ))}
  </span>
);

export default KorokEffect;
