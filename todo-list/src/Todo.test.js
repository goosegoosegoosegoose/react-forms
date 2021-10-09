import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo"

it("smoke test", () => {
    render(<Todo />);
});

it("snapshot test", () => {
    const { asFragment } = render(<Todo />);
    expect(asFragment()).toMatchSnapshot();
})