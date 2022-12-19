import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Dialog } from '.';

describe('Running Test for UI Dialog', () => {
  const mockClose = jest.fn();
  test('Dialog should not be visible', () => {
    render(
      <Dialog open={false} title='test text'>
        <span>test</span>
      </Dialog>,
    );
    expect(screen.queryByTestId('dialog')).not.toBeInTheDocument();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  test('Dialog should be visible', () => {
    render(
      <Dialog open={true} title='test text'>
        <span>test</span>
      </Dialog>,
    );
    expect(screen.getByTestId('dialog')).toBeInTheDocument();
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  test('Dialog should show close button', () => {
    render(
      <Dialog open={true} title='test text ' handleClose={mockClose}>
        <span>test</span>
      </Dialog>,
    );
    expect(screen.getByTestId('dialog-close-button')).toBeInTheDocument();
  });
});
