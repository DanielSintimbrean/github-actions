import { afterEach, beforeEach, describe, it } from "vitest";
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

    fireEvent.click(screen.getByText("Click me again"));

    screen.getByText("Hello from ReactComponent - 2");
  });
});
