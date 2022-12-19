import React from 'react';
import { Radio } from '.';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'UI Component/Radio',
  component: Radio,
} as Meta;

export const Default: Story = (args) => (
  <Radio text='Radio Text' direction='left' checked={false} {...args} />
);
Default.args = {
  text: 'Radio Text',
  direction: 'left',
  checked: false,
};

export const Checked: Story = (args) => (
  <Radio text='Radio Text' direction='left' checked={true} {...args} />
);
Checked.args = {
  text: 'Radio Text',
  direction: 'left',
  checked: true,
};
