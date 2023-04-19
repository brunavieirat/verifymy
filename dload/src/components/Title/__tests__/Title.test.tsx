import { render } from "@testing-library/react";
import Title from "../Title";


describe("Title", () => {
    it("renders with children", () => {
      const { getByText } = render(<Title>Test Title</Title>);
      expect(getByText("Test Title")).toBeInTheDocument();
    });
  });
  