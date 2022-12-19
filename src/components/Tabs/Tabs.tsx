import cx from 'classnames';
import React, { FC, useState } from 'react';
import { Button } from '../Button';
import { Tab } from './Tab';

export interface TabsProps {
  direction: 'row' | 'column';
  name?: string;
  children: JSX.Element[];
}

export const Tabs: FC<TabsProps> = ({ name = 'tabs', direction, children }) => {
  const [selected, setSelected] = useState(children[0].props.value);
  return (
    <div
      className={`ui-tabs ${name}`}
      data-testid={name}
      style={{ flexDirection: direction === 'row' ? 'column' : 'row' }}
    >
      <div
        className='tabs-header'
        style={{ flexDirection: direction === 'row' ? 'row' : 'column' }}
      >
        {React.Children.map(children, (child, index) => (
          <div
            className={cx('tab-header', {
              'tab-active': child.props.value === selected,
            })}
          >
            <Button
              variant='text'
              name={`tab_${index}`}
              onClick={() => setSelected(child.props.value)}
            >
              <span>{child.props.value}</span>
            </Button>
          </div>
        ))}
      </div>
      {React.Children.map(children, (child, index) =>
        child.props.value === selected ? (
          <Tab name={`tab_content_${index}`} value={child.props.value}>
            {child.props.children}
          </Tab>
        ) : null,
      )}
    </div>
  );
};
