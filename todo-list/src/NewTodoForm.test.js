import React from "react";
import { render } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm"

it("smoke test", () => {
    render(<NewTodoForm />);
});

it("snapshot test", () => {
    const { asFragment } = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot();
});