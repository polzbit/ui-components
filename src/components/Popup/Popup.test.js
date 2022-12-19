import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Popup } from '.';

describe('Running Test for UI Popup', () => {
  const mockClose = jest.fn();
  test('Popup should not be visible', () => {
    render(
      <Popup open={false} direction='right' handleClose={mockClose}>
        <span>test</span>
      </Popup>,
    );
    expect(screen.queryByTestId('popup')).not.toBeInTheDocument();
  });

  test.each(['top', 'left', 'bottom', 'right'])(
    'Popup should be visible',
    (direction) => {
      render(
        <Popup open={true} direction={direction} handleClose={mockClose}>
          <span>test</span>
        </Popup>,
      );
      expect(screen.getByTestId('popup')).toBeInTheDocument();
    },
  );

  test.each(['top', 'left', 'bottom', 'right'])(
    'Popup should be visible with anchor',
    (direction) => {
      render(
        <Popup
          open={true}
          direction={direction}
          handleClose={mockClose}
          anchorElement={{ offsetWidth: 4 }}
        >
          <span>test</span>
        </Popup>,
      );
      expect(screen.getByTestId('popup')).toBeInTheDocument();
    },
  );

  test('Popup should show arrow', () => {
    render(
      <Popup open={true} direction='right' handleClose={mockClose} arrow>
        <span>test</span>
      </Popup>,
    );
    expect(screen.getByTestId('popup')).toHaveClass('arrow');
  });

  test('Popup should be closed on click outside', () => {
    render(
      <div>
        <div data-testid='test'></div>
        <Popup
          open={true}
          direction='right'
          handleClose={mockClose}
          anchorElement={document.createElement('div')}
        >
          <span>test</span>
        </Popup>
      </div>,
    );
    fireEvent.click(screen.getByTestId('test'));
    expect(mockClose).toBeCalled();
  });
});
