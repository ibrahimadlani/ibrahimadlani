/**
 * Styled tooltip shown above its child on hover and on keyboard focus.
 *
 * Pure CSS: the wrapper is the `group/tooltip`, so no state and no re-render is
 * involved, and `group-focus-within` makes the label reachable with the
 * keyboard — which the native `title` attribute never was.
 *
 * The bubble is `aria-hidden` and purely decorative: the child keeps its own
 * accessible name through `aria-label`, so assistive technology announces the
 * control once, not twice.
 *
 * @param {Object} props
 * @param {string} props.label - Text of the bubble.
 * @param {React.ReactNode} props.children - The control being described.
 * @returns {JSX.Element}
 */
const Tooltip = ({ label, children }) => (
  <span className="group/tooltip relative flex">
    {children}
    <span
      role="tooltip"
      aria-hidden="true"
      className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2.5 -translate-x-1/2 translate-y-1 scale-95 whitespace-nowrap rounded-md bg-primary px-2.5 py-1 text-xs font-medium text-background opacity-0 shadow-lg transition duration-150 ease-out group-hover/tooltip:translate-y-0 group-hover/tooltip:scale-100 group-hover/tooltip:opacity-100 group-focus-within/tooltip:translate-y-0 group-focus-within/tooltip:scale-100 group-focus-within/tooltip:opacity-100 motion-reduce:transition-none dark:bg-darkPrimary dark:text-darkBackground"
    >
      {label}
      {/* Caret: a small square rotated 45° and half tucked under the bubble. */}
      <span className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[1px] bg-primary dark:bg-darkPrimary" />
    </span>
  </span>
);

export default Tooltip;
