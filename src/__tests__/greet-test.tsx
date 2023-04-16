import { render, screen } from '@testing-library/react';
import { Greet } from '../components/greet-tdd/greet-tdd';

describe('Greet-Tdd', () => {
    test("renders correctly", () => {
        render(<Greet />);
        const textElement = screen.getByText('Hello');
        expect(textElement).toBeInTheDocument();
    })

    test("renders with name", () => {
        render(<Greet name='Yoga' />);
        const textElement = screen.getByText('Hello Yoga');
        expect(textElement).toBeInTheDocument();
    })
})