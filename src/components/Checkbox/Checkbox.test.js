import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Checkbox } from '.';

describe('Running Test for UI Checkbox', () => {
  test.each(['left', 'top', 'right', 'bottom'])(
    'Checkbox should mount to left',
    (direction) => {
      render(
        <Checkbox text='test text' direction={direction} checked={false} />,
      );
      expect(screen.getByTestId('checkbox')).toBeInTheDocument();
    },
  );

  test('Checkbox should be unchecked', () => {
    render(<Checkbox text='test text' direction='right' checked={false} />);
    expect(screen.getByTestId('uncheck-icon')).toBeInTheDocument();
  });

  test('Checkbox should be checked', () => {
    render(<Checkbox text='test text' direction='right' checked={true} />);
    expect(screen.getByTestId('check-icon')).toBeInTheDocument();
  });
});
