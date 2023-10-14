import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "../Input";

describe("Input", () => {
  it("should render correctly", () => {
    render(<Input value="" />);

    const inputElement = screen.getByRole("textbox");

    expect(inputElement).toBeInTheDocument();
  });
});
// -------------------------------------------------------------------------- //
