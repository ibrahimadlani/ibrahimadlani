import { act, render } from "@testing-library/react";

import CursorGradient from "@/components/layout/CursorGradient";

let resolvedTheme = "dark";

jest.mock("next-themes", () => ({
  useTheme: () => ({ resolvedTheme }),
}));

/** jsdom ships no matchMedia; report the viewport width the test asks for. */
const mockViewport = (matches) => {
  window.matchMedia = jest.fn().mockReturnValue({
    matches,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  });
};

const overlay = (container) => container.querySelector("div[aria-hidden]");

describe("CursorGradient", () => {
  beforeEach(() => {
    resolvedTheme = "dark";
    mockViewport(true);
    jest
      .spyOn(window, "requestAnimationFrame")
      .mockImplementation((callback) => {
        callback();
        return 0;
      });
  });

  afterEach(() => jest.restoreAllMocks());

  it("renders the overlay in dark mode on a desktop viewport", () => {
    const { container } = render(<CursorGradient />);
    expect(overlay(container)).toBeInTheDocument();
  });

  it("stays out of the tree in light mode", () => {
    resolvedTheme = "light";
    const { container } = render(<CursorGradient />);
    expect(overlay(container)).not.toBeInTheDocument();
  });

  it("stays out of the tree below the desktop breakpoint", () => {
    mockViewport(false);
    const { container } = render(<CursorGradient />);
    expect(overlay(container)).not.toBeInTheDocument();
  });

  it("follows the pointer, offset by the scroll position", () => {
    const { container } = render(<CursorGradient />);

    act(() => {
      window.scrollY = 200;
      window.dispatchEvent(
        Object.assign(new Event("mousemove"), { clientX: 120, clientY: 40 })
      );
    });

    expect(overlay(container)).toHaveStyle({
      background:
        "radial-gradient(600px at 120px 240px, rgba(255, 255, 255, 0.04), transparent 80%)",
    });
  });

  it("removes its listeners on unmount", () => {
    const removeListener = jest.spyOn(window, "removeEventListener");
    render(<CursorGradient />).unmount();

    const removed = removeListener.mock.calls.map(([event]) => event);
    expect(removed).toEqual(expect.arrayContaining(["mousemove", "scroll"]));
  });
});
