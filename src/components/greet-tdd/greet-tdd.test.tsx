/**
 *  Greet should render the test hello and if a name is passed into the component 
 *  It should render hello followed by name
 * 
 */

import { render, screen } from '@testing-library/react';
import { Greet } from './greet-tdd';

describe('Greet-Tdd', () => {
    test("renders correctly", () => {
        render(<Greet />);
        const textElement = screen.getByText('Hello Guest');
        expect(textElement).toBeInTheDocument();
    })

    test("renders with name", () => {
        render(<Greet name='Yoga' />);
        const textElement = screen.getByText('Hello Yoga');
        expect(textElement).toBeInTheDocument();
    })
})