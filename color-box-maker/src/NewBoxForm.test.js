import React from "react";
import { render } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm"

it("smoke test", () => {
    render(<NewBoxForm />);
});

it("snapshot test", () => {
    const { asFragment } = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
});