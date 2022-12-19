import cx from 'classnames';
import { CheckSquare, Square } from 'phosphor-react';
import React, { FC } from 'react';

export interface CheckboxProps {
  name?: string;
  text: string;
  checked: boolean;
  direction: 'top' | 'right' | 'bottom' | 'left';
}

export const Checkbox: FC<CheckboxProps> = ({
  name = 'checkbox',
  text,
  direction,
  checked,
}) => {
  const renderCheckbox = () =>
    checked ? (
      <CheckSquare
        className='check-icon'
        data-testid='check-icon'
        size={24}
        weight='fill'
      />
    ) : (
      <Square className='check-icon' data-testid='uncheck-icon' size={24} />
    );

  if (direction === 'top' || direction === 'left') {
    return (
      <div
        className={cx(`ui-checkbox ${name} checkbox-${direction}`, {
          'checkbox-checked': checked,
        })}
        data-testid={name}
      >
        {renderCheckbox()}
        <span>{text}</span>
      </div>
    );
  }
  return (
    <div
      className={`ui-checkbox ${name} checkbox-${direction}`}
      data-testid={name}
    >
      <span>{text}</span>
      {renderCheckbox()}
    </div>
  );
};
