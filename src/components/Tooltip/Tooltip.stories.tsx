import React from 'react';
import { Tooltip } from '.';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'UI Component/Tooltip',
  component: Tooltip,
} as Meta;

export const Default: Story = (args) => (
  <Tooltip text='' direction='right' {...args}>
    <span>Hover here</span>
  </Tooltip>
);
Default.args = {
  text: 'Tooltip test text',
  direction: 'right',
};
