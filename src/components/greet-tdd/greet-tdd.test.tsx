/**
 *  Greet should render the test hello and if a name is passed into the component 
 *  It should render hello followed by name
 * 
 */

import { render, screen } from '@testing-library/react';
import { Greet } from './greet-tdd';

test("Greet-tdd renders correctly", () =>{
    render(<Greet />);
    const textElement = screen.getByText('Hello');
    expect(textElement).toBeInTheDocument();
})

test("Greet-tdd with name", () => {
    render(<Greet name='Yoga' />);
    const textElement = screen.getByText('Hello Yoga');
    expect(textElement).toBeInTheDocument();
})