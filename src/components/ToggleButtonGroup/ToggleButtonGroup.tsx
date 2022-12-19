import React, { FC, useState } from 'react';
import { ToggleButton } from '../ToggleButton/ToggleButton';

export interface ToggleButtonGroupProps {
  name?: string;
  direction: 'column' | 'row';
  children: JSX.Element[] | JSX.Element;
  onSelect?: Function;
}

export const ToggleButtonGroup: FC<ToggleButtonGroupProps> = ({
  name = 'toggle-button-group',
  direction,
  onSelect,
  ...props
}) => {
  const { children } = props;
  const [select, setSelect] = useState(
    Array.isArray(children) ? children[0].props.value : children.props.value,
  );

  const handleSelect = (value: string) => {
    setSelect(value);
    if (onSelect) {
      onSelect(value);
    }
  };

  return (
    <div
      className='ui-toggle-button-group'
      style={{ flexDirection: direction }}
      data-testid={name}
    >
      {React.Children.map(children, (child) => {
        return (
          <ToggleButton
            {...child.props}
            selected={select === child.props.value}
            handleClick={handleSelect}
          />
        );
      })}
    </div>
  );
};
