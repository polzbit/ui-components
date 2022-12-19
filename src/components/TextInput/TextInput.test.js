import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { TextInput } from '.';

describe('Running Test for UI TextInput', () => {
  const mockHandleChange = jest.fn();
  test('TextInput should mount', () => {
    render(<TextInput value='test text' onChange={mockHandleChange} />);
    expect(screen.getByTestId('textInput')).toBeInTheDocument();
  });

  test('TextInput should handle change', () => {
    render(<TextInput value='test text' onChange={mockHandleChange} />);
    const input = screen.getByTestId('textInput').querySelector('input');
    fireEvent.change(input, {
      target: { value: 'test' },
    });
    expect(mockHandleChange).toBeCalled();
  });

  test('TextInput should not show error', () => {
    render(
      <TextInput value='test text' error='' onChange={mockHandleChange} />,
    );
    expect(screen.getByTestId('error-message')).not.toBeVisible();
  });

  test('TextInput should show error', () => {
    render(
      <TextInput value='test text' error='error' onChange={mockHandleChange} />,
    );
    expect(screen.getByTestId('error-message')).toBeVisible();
  });
});
