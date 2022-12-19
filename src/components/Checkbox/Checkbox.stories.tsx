import React from 'react';
import { Checkbox } from '.';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'UI Component/Checkbox',
  component: Checkbox,
} as Meta;

export const Default: Story = (args) => (
  <Checkbox text='Checkbox Text' direction='left' checked={false} {...args} />
);
Default.args = {
  text: 'Checkbox Text',
  direction: 'left',
  checked: false,
};

export const Checked: Story = (args) => (
  <Checkbox text='Checkbox Text' direction='left' checked={true} {...args} />
);
Checked.args = {
  text: 'Checkbox Text',
  direction: 'left',
  checked: true,
};
