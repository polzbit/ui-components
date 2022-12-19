import { XCircle } from 'phosphor-react';
import React, { FC } from 'react';
import { Button } from '../Button';

export interface ChipProps {
  name?: string;
  variant: 'fill' | 'outline';
  text: string;
  icon?: JSX.Element;
  handleDelete?: () => void;
}

export const Chip: FC<ChipProps> = ({
  name = 'chip',
  variant,
  text,
  icon,
  handleDelete,
}) => {
  return (
    <div className={`ui-chip ${name} chip-${variant}`} data-testid={name}>
      {icon}
      <span>{text}</span>
      {handleDelete && (
        <Button variant='text' name='chip-delete-button' onClick={handleDelete}>
          <XCircle size={20} weight='fill' />
        </Button>
      )}
    </div>
  );
};
