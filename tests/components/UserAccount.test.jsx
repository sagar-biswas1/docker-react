import React from "react";
import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";

describe("UserAccount", () => {
  const user = { isAdmin: true, name: "sagar" };
  it("should render name of an user", () => {
    render(<UserAccount user={user} />);

    expect(screen.getByText(user.name)).toBeInTheDocument();
  });

  it("should render Edit button if user is an admin", () => {
    render(<UserAccount user={user} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i);
  });

  it("should not render Edit button if user is not an admin", () => {
    render(<UserAccount user={{ isAdmin: false, name: "sagar" }} />);
    const button = screen.queryByRole("button");
    expect(button).not.toBeInTheDocument();
  });
});
