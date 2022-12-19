import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ToggleButtonGroup } from '.';
import { fireEvent } from '@storybook/testing-library';
import { ToggleButton } from '../ToggleButton';

describe('Running Test for UI ToggleButtonGroup', () => {
  const mockChange = jest.fn();

  test.each(['row', 'column'])(
    'ToggleButtonGroup should mount',
    (direction) => {
      render(
        <ToggleButtonGroup selected='test' direction={direction}>
          <ToggleButton variant='outline' value='test' handleClick={mockChange}>
            test
          </ToggleButton>
          <ToggleButton variant='outline' value='test'>
            test 2
          </ToggleButton>
        </ToggleButtonGroup>,
      );
      expect(screen.getByTestId('toggle-button-group')).toBeInTheDocument();
    },
  );

  test('ToggleButtonGroup should be disabled', () => {
    render(
      <ToggleButtonGroup selected='test' direction='row'>
        <ToggleButton
          variant='outline'
          value='test'
          handleClick={mockChange}
          disabled
        >
          test
        </ToggleButton>
      </ToggleButtonGroup>,
    );
    expect(screen.getByTestId('button')).toBeDisabled();
  });

  test('ToggleButtonGroup should be clickable', () => {
    render(
      <ToggleButtonGroup selected='test' direction='row' onSelect={mockChange}>
        <ToggleButton variant='outline' value='test'>
          test
        </ToggleButton>
      </ToggleButtonGroup>,
    );
    const button = screen.getByTestId('button');
    expect(button).toBeEnabled();
    fireEvent.click(button);
    expect(mockChange).toBeCalled();
  });

  test('ToggleButtonGroup should be active', () => {
    render(
      <ToggleButtonGroup selected='test' direction='row'>
        <ToggleButton variant='outline' value='test' handleClick={mockChange}>
          test
        </ToggleButton>
      </ToggleButtonGroup>,
    );
    const button = screen.getByTestId('toggle-button');
    expect(button).toHaveClass('button-selected');
  });
});
