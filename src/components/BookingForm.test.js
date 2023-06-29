import { fireEvent, render, screen, configure } from "@testing-library/react";
import BookingForm from './BookingForm';

beforeEach(() => {
    configure({
      throwSuggestions: true,
    })
});

describe("Booking Form", () => {

    test('Renders the BookingForm heading', () => {
        render(<BookingForm />);
        const headingElement = screen.getByRole('heading', { name: /book your table/i });
        expect(headingElement).toBeInTheDocument();
    });

    test('Submission is disabled if required fields are empty', () => {
        const handleSubmit = jest.fn();
        render(<BookingForm onSubmit={handleSubmit} />);

        const dateInput = screen.getByPlaceholderText(/Select Date/i);
        fireEvent.change(dateInput, { target: { value: "0"}});

        const submitButton = screen.getByRole('button');
        fireEvent.click(submitButton);

        expect(handleSubmit).not.toHaveBeenCalled();
    });

});
