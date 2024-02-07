import Collapse from "@/components/Collapse.tsx";
import { setup } from "@/tests/setup.ts";
import '@testing-library/jest-dom/extend-expect';
import { act, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";


describe("Collapse Component", () => {
  test("should not show the content at the start", async () => {

    render(<Collapse title="test" content="Content" />)
    const elem = screen.getByTestId('stateCollapse')
    expect(elem.className).toBe('hidden')

  });
  test("should show the content when we click on chevron", async () => {

    const { user } = setup(<Collapse title="test" content="Content" />);

    const chevronElement = screen.getByTestId('chevron')

    await act(async () => await user.click(chevronElement));


    const elem = screen.getByTestId('stateCollapse')
    expect(elem.className).toBe('visible')

  });
});
