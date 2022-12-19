import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ToggleButton } from '.';
import { fireEvent } from '@storybook/testing-library';

describe('Running Test for UI ToggleButton', () => {
  const mockClick = jest.fn();

  test('ToggleButton should mount', () => {
    render(<ToggleButton>test</ToggleButton>);
    expect(screen.getByTestId('button')).toBeInTheDocument();
  });

  test('ToggleButton should be disabled', () => {
    render(<ToggleButton disabled>test</ToggleButton>);
    expect(screen.getByTestId('button')).toBeDisabled();
  });

  test('ToggleButton should be clickable', () => {
    render(<ToggleButton handleClick={mockClick}>test</ToggleButton>);
    const button = screen.getByTestId('button');
    expect(button).toBeEnabled();
    fireEvent.click(button);
    expect(mockClick).toBeCalled();
  });

  test('ToggleButton should be active', () => {
    render(<ToggleButton selected>test</ToggleButton>);
    const button = screen.getByTestId('toggle-button');
    expect(button).toHaveClass('button-selected');
  });
});
