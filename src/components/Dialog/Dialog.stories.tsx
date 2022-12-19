import React from 'react';
import { Dialog } from '.';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'UI Component/Dialog',
  component: Dialog,
} as Meta;

export const Default: Story = (args) => (
  <Dialog open={false} {...args}>
    <span>Dialog content</span>
  </Dialog>
);
Default.args = {
  open: false,
};

export const Open: Story = (args) => (
  <Dialog open={true} {...args}>
    <span>Dialog content</span>
  </Dialog>
);
Open.args = {
  open: true,
};

export const OpenWithCloseButton: Story = (args) => (
  <Dialog open={true} {...args}>
    <span>Dialog content</span>
  </Dialog>
);
OpenWithCloseButton.args = {
  open: true,
  handleClose: () => null,
};

export const Title: Story = (args) => (
  <Dialog open={true} {...args}>
    <span>Dialog content</span>
  </Dialog>
);
Title.args = {
  open: true,
  title: 'test title',
};
