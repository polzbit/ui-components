import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Radio } from '.';

describe('Running Test for UI Radio', () => {
  test.each(['top', 'right', 'bottom', 'left'])(
    'Radio should mount',
    (direction) => {
      render(<Radio text='test text' direction={direction} />);
      expect(screen.getByTestId('radio')).toBeInTheDocument();
    },
  );

  test('Radio should be checked', () => {
    render(<Radio text='test text' direction='right' checked />);
    expect(screen.getByTestId('radio-bullet')).toBeVisible();
  });

  test('Radio should be unchecked', () => {
    render(<Radio text='test text' direction='right' />);
    expect(screen.getByTestId('radio-bullet')).not.toBeVisible();
  });
});
