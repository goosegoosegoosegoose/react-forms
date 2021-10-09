import React from "react";
import { render } from "@testing-library/react";
import Box from "./Box"

it("smoke test", () => {
    render(<Box />);
});

it("snapshot test", () => {
    const { asFragment } = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
})