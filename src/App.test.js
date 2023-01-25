import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

describe("Booking Form", () => {
  test("User is able to submit the form if the date is not today and guest is greater than 1.", () => {
    const date1 = "2023-01-25";
    const guests1 = "1";
    const handleSubmit = jest.fn();
    render(<BookingForm onSubmit={handleSubmit} />);

    // You have to write the rest of the test below to make the assertion pass

    const rangeInput = screen.getByLabelText(/Number of guests:/);
    fireEvent.change(rangeInput, { target: { value: score } });
    const textArea = screen.getByLabelText(/Choose time:/);
    fireEvent.change(textArea, { target: { value: comment } });

    const submitButton = screen.getByRole("Button");
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith({
      date1,
      guests1,
    });
  });

  test("User is able to submit the form if the score is higher than 5, without additional feedback", () => {
    const score = "9";
    const handleSubmit = jest.fn();
    render(<BookingForm onSubmit={handleSubmit} />);

    // You have to write the rest of the test below to make the assertion pass

    const rangeInput = screen.getByLabelText(/Score:/);
    fireEvent.change(rangeInput, { target: { value: score } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment: "",
    });
  });
});
