import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Chip } from '.';
import { fireEvent } from '@storybook/testing-library';
import { Activity } from 'phosphor-react';

describe('Running Test for UI Chip', () => {
  const mockDelete = jest.fn();
  test('Chip should mount', () => {
    render(<Chip text='test text' variant='fill' />);
    expect(screen.getByTestId('chip')).toBeInTheDocument();
  });

  test('Chip should show icon', () => {
    render(
      <Chip
        text='test text'
        variant='fill'
        icon={<Activity size={32} weight='fill' data-testid='icon' />}
      />,
    );
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  test('Chip should have delete button', () => {
    render(<Chip text='test text' variant='fill' handleDelete={mockDelete} />);
    const deleteButton = screen.getByTestId('chip-delete-button');
    fireEvent.click(deleteButton);
    expect(deleteButton).toBeInTheDocument();
    expect(mockDelete).toBeCalled();
  });
});
