import { afterEach, beforeEach, describe, expect, it } from "vitest";
import ReactComponent from "./ReactComponent";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";

describe("React Component", () => {
  beforeEach(() => {
    render(<ReactComponent />);
  });
  afterEach(() => {
    cleanup();
  });

  it("should render", () => {});

  it("should show message", () => {
    screen.getByText("Hello from ReactComponent - 0");
  });

  it("should increment state", () => {
    screen.getByText("Hello from ReactComponent - 0");

    fireEvent.click(screen.getByText("Click me"));

    screen.getByText("Hello from ReactComponent - 1");
  });

  it("should change button text", () => {
    screen.getByText("Hello from ReactComponent - 0");

    fireEvent.click(screen.getByText("Click me"));

    screen.getByText("Hello from ReactComponent - 1");

    fireEvent.click(screen.getByText("Increment"));

    screen.getByText("Hello from ReactComponent - 2");
  });

  it("should not increment more than 10", () => {
    screen.getByText("Hello from ReactComponent - 0");

    fireEvent.click(screen.getByText("Click me"));

    for (let i = 0; i < 15; i++) {
      fireEvent.click(screen.getByText("Increment"));
    }

    screen.getByText("Hello from ReactComponent - 10");
  });

  it("should decrement", () => {
    screen.getByText("Hello from ReactComponent - 0");

    fireEvent.click(screen.getByText("Click me"));
    fireEvent.click(screen.getByText("Decrement"));

    screen.getByText("Hello from ReactComponent - 0");
  });

  it("should not find decrement", () => {
    screen.getByText("Hello from ReactComponent - 0");

    fireEvent.click(screen.getByText("Click me"));
    fireEvent.click(screen.getByText("Decrement"));

    expect(screen.queryByText("Decrement")).toBeNull();

    screen.getByText("Hello from ReactComponent - 0");
  });
});
