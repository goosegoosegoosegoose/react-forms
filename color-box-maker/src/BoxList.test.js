import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList"

it("smoke test", () => {
    render(<BoxList />);
});

it("snapshot test", () => {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
})

it("adds new box", () => {
    const {queryByText, getByLabelText} = render(<BoxList />);
    const bgInput = getByLabelText('Background Color:');
    const wInput = getByLabelText('Width:');
    const hInput = getByLabelText('Height:');
    const btn = queryByText('Submit');
    expect(queryByText('X')).not.toBeInTheDocument();

    fireEvent.change(bgInput, {target: {value: 'black'}});
    fireEvent.change(wInput, {target: {value: 10}});
    fireEvent.change(hInput, {target: {value: 10}});
    fireEvent.click(btn);
    expect(queryByText('X')).toBeInTheDocument();
});

// the fact forms are tested in the list instead of in the forms js threw me for a loop