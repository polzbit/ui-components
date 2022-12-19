import React from 'react';
import { Popup } from '.';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'UI Component/Popup',
  component: Popup,
} as Meta;

export const Default: Story = (args) => (
  <Popup direction='bottom' open={false} handleClose={() => null} {...args}>
    <span>Popup content</span>
  </Popup>
);
Default.args = {
  open: false,
};

export const Open: Story = (args) => (
  <Popup direction='bottom' open={true} handleClose={() => null} {...args}>
    <span>Popup content</span>
  </Popup>
);
Open.args = {
  open: true,
};
