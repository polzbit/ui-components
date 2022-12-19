import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { AdjustableHeader } from '.';

describe('Running Test for UI AdjustableHeader', () => {
  test('AdjustableHeader should mount', () => {
    render(<AdjustableHeader>test</AdjustableHeader>);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  test('AdjustableHeader should scroll', () => {
    render(
      <AdjustableHeader position={100} preloadAnimation={true}>
        test
      </AdjustableHeader>,
    );
    expect(screen.getByTestId('header')).toHaveClass('closed');
  });

  test('AdjustableHeader should scroll', () => {
    render(<AdjustableHeader position={0}>test</AdjustableHeader>);
    fireEvent.scroll(window, {
      target: { scrollY: 1000 },
    });
    expect(screen.getByTestId('header')).not.toHaveClass('closed');
  });
});
