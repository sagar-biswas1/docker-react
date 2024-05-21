import React from "react";
import { render, screen } from "@testing-library/react";
import UserLists from "../../src/components/UserLists";

describe("UserList", () => {
  it("Should render no user if user array is empty", () => {
    render(<UserLists users={[]} />);
    expect(screen.getByText(/No users/i)).toBeInTheDocument();
  });
  it("Should render  users if user array is not empty", () => {
    const users = [
      {
        id: 11,
        name: "John",
      },
      {
        id: 22,
        name: "Janeee",
      },
    ];
    render(<UserLists users={users} />);
    users.forEach((user) => {
      const link = screen.getByRole("link", { name: user.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href',`/users/${user.id}`);
    });
  });
});
