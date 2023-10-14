import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../Footer";

describe("Footer", () => {
  it("should render correctly", () => {
    render(<Footer />);

    const h2Element = screen.getByRole("heading", { level: 2 });

    expect(h2Element).toBeInTheDocument();
    expect(screen.getByText("Informações Importantes")).toBeInTheDocument();
  });
  // -------------------------------------------------------------------------- //
  it("correctly redirecting to list", () => {
    render(<Footer />);

    const ulElement = screen.getByRole("list");

    expect(ulElement).toBeInTheDocument();

    const liElements = screen.getAllByRole("listitem");

    expect(liElements).toHaveLength(4);
  });
  // -------------------------------------------------------------------------- //
  it("correctly redirecting to github", () => {
    render(<Footer />);

    const redirectToGithub = screen.getByText("Github");

    const githubLink = redirectToGithub.getAttribute("href");

    expect(githubLink).toBe("https://github.com/gabrielbvl");
  });
  // -------------------------------------------------------------------------- //
  it("correctly redirecting to linkedIn", () => {
    render(<Footer />);

    const redirectToGithub = screen.getByText("LinkedIn");

    const githubLink = redirectToGithub.getAttribute("href");

    expect(githubLink).toBe("https://www.linkedin.com/in/gabrielbvl");
  });
  // -------------------------------------------------------------------------- //
  it("correctly redirecting to repository", () => {
    render(<Footer />);

    const redirectToGithub = screen.getByText("Acesse o repositório");

    const githubLink = redirectToGithub.getAttribute("href");

    expect(githubLink).toBe("https://github.com/gabrielbvl/calculadora");
  });
  // -------------------------------------------------------------------------- //
});
