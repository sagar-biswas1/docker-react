import React from "react";
import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Navbar from "../../src/components/Navbar";
import "@testing-library/jest-dom/vitest"
describe("Navbar", () => {
  it("should render hello with name when name is provided", () => {
    render(<Navbar name="sagar" />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/sagar/i);
  });

  it("should render login button when name is not provided", () => {
    render(<Navbar  />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
  });
});
