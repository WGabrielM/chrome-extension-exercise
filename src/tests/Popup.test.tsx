import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Popup from "../Popup";

describe("Popup component", () => {
  beforeEach(() => {
    render(<Popup />);
  });

  test("renders the popup correctly", () => {
    const heading = screen.getByText(/Messages/i);
    expect(heading).toBeInTheDocument();
  });

  test("shows unread messages", () => {
    const unreadMessage = screen.getByText(/Team meeting at 3 PM today/i);
    expect(unreadMessage).toBeInTheDocument();
  });

  test("marks a message as read when clicked", () => {
    const message = screen.getByText(/Team meeting at 3 PM today/i);
    fireEvent.click(message);
    expect(message).not.toBeInTheDocument();
  });
});
