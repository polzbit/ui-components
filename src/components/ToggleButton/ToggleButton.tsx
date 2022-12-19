import cx from 'classnames';
import React, { FC, useState } from 'react';
import { Button, ButtonProps } from '../Button';

export interface ToggleButtonProps extends ButtonProps {
  selected?: boolean;
  value: string;
  handleClick: Function;
}

export const ToggleButton: FC<ToggleButtonProps> = ({
  variant,
  name = 'toggle-button',
  tooltip = '',
  tooltipDirection = 'bottom',
  selected,
  value,
  handleClick,
  ...props
}) => {
  const { children } = props;
  const [state, setState] = useState(false);
  const onClick = () => {
    handleClick(value);
    setState(!state);
  };
  return (
    <div
      className={cx('ui-toggle-button', {
        'button-selected': selected !== undefined ? selected : state,
      })}
      data-testid={name}
    >
      <Button
        {...props}
        variant={variant}
        tooltip={tooltip}
        tooltipDirection={tooltipDirection}
        onClick={onClick}
      >
        {children}
      </Button>
    </div>
  );
};
