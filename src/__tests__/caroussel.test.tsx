import { Carousel } from "@/components/Carousel.tsx";
import { setup } from "@/tests/setup.ts";
import '@testing-library/jest-dom/extend-expect';
import { act, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";


const pictures = [
  "https://images.pexels.com/photos/10008077/pexels-photo-10008077.jpeg",
  "https://images.pexels.com/photos/18364792/pexels-photo-18364792/free-photo-of-paysage-desert-longue-exposition-aride.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

describe("Carousel Component", () => {

  test("should show the first picture", async () => {
    render(<Carousel pictures={pictures}/>)

    const imageElement = screen.getByAltText(/photo/i)
    expect(imageElement.getAttribute('alt')).toBe('photo 0')
  });

  test("should show the next picture", async () => {

    const {user} = setup(<Carousel pictures={pictures}/>)

    const chevronRight = screen.getByTestId('chevronRight')
    await act(async () => await user.click(chevronRight))
    const imageElement = screen.getByAltText(/photo/i)
    expect(imageElement.getAttribute('alt')).toBe('photo 1')
  });

  test("should show the previous picture, or the last one if we reach the first one once we clich on the left chevron", async () => {

    const {user} = setup(<Carousel pictures={pictures}/>)

    const chevronLeft = screen.getByTestId('chevronLeft')
    await act(async () => await user.click(chevronLeft))
    const imageElement = screen.getByAltText(/photo/i)
    expect(imageElement.getAttribute('alt')).toBe('photo 1')
  });

  test("should show the first picture when we reach out the last one", async () => {

    const {user} = setup(<Carousel pictures={pictures}/>)

    const chevronRight = screen.getByTestId('chevronRight')
    await act(async () => await user.click(chevronRight))
    await act(async () => await user.click(chevronRight))

    const imageElement = screen.getByAltText(/photo/i)
    expect(imageElement.getAttribute('alt')).toBe('photo 0')
  });


});
