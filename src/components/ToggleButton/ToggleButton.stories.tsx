import React from 'react';
import { ToggleButton } from '.';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'UI Component/ToggleButton',
  component: ToggleButton,
} as Meta;

export const Default: Story = (args) => (
  <ToggleButton
    variant='outline'
    value='default'
    handleClick={() => null}
    {...args}
  >
    <span>CLICK HERE</span>
  </ToggleButton>
);
Default.args = {
  label: 'Button',
  variant: 'outline',
  value: 'default',
};
