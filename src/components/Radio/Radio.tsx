import cx from 'classnames';
import React, { FC } from 'react';

export interface RadioProps {
  name?: string;
  text: string;
  checked: boolean;
  direction: 'top' | 'right' | 'bottom' | 'left';
}

export const Radio: FC<RadioProps> = ({
  name = 'radio',
  text,
  direction,
  checked,
}) => {
  const renderRadio = () => (
    <div className='radio-wrapper' role='radio'>
      <div
        className='radio'
        data-testid='radio-bullet'
        style={{ opacity: checked ? 1 : 0 }}
      ></div>
    </div>
  );

  if (direction === 'top' || direction === 'left') {
    return (
      <div
        className={cx(`ui-radio ${name} radio-${direction}`, {
          'radio-checked': checked,
        })}
        data-testid={name}
      >
        {renderRadio()}
        <span>{text}</span>
      </div>
    );
  }
  return (
    <div className={`ui-radio ${name} radio-${direction}`} data-testid={name}>
      <span>{text}</span>
      {renderRadio()}
    </div>
  );
};
