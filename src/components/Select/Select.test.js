import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Select } from '.';

describe('Running Test for UI Select', () => {
  const mockSelect = jest.fn();
  test('Select should mount', () => {
    render(
      <Select selected='item 1' list={['item 1']} onSelect={mockSelect} />,
    );
    expect(screen.getByTestId('select')).toBeInTheDocument();
  });

  test('Select should show placeholder', () => {
    render(
      <Select
        selected=''
        placeholder='test'
        list={['item 1']}
        onSelect={mockSelect}
      />,
    );
    expect(screen.getByTestId('button')).toHaveTextContent('test');
  });

  test('Select should open', () => {
    render(
      <Select
        selected='item 1'
        list={['item 1']}
        onSelect={mockSelect}
        open={true}
      />,
    );
    const button = screen.getByTestId('button');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
  });

  test('Select should close on select', () => {
    render(
      <Select
        selected='item 1'
        list={['item 1']}
        onSelect={mockSelect}
        open={true}
      />,
    );
    const item = screen.getByTestId('select-item');
    expect(item).toBeInTheDocument();
    fireEvent.click(item);
    expect(mockSelect).toBeCalled();
  });
});
