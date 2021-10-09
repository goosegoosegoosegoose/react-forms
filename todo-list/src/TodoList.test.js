import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList"

it("smoke test", () => {
    render(<TodoList />);
});

it("snapshot test", () => {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
})

it("adds new todo", () => {
    const {queryByText, getByLabelText} = render(<TodoList />);
    const input = getByLabelText('New Todo:');
    const btn = queryByText('Add Todo');
    expect(queryByText('Dishes')).not.toBeInTheDocument();

    fireEvent.change(input, {target: {value: 'Dishes'}});
    fireEvent.click(btn);
    expect(queryByText('Dishes')).toBeInTheDocument();
});