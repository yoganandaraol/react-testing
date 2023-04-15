import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// from the below test case the words `test` and `expect` are not availble
// this is the feature that create-react-app provided to us
// `test` and `expect` are the methods globally availble to us from the `jest` library.

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
