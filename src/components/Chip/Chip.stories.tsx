import React from 'react';
import { Chip } from '.';
import { Meta, Story } from '@storybook/react';
import { Alien } from 'phosphor-react';

export default {
  title: 'UI Component/Chip',
  component: Chip,
} as Meta;

export const Default: Story = (args) => (
  <Chip text='Some Text' variant='outline' {...args} />
);
Default.args = {
  text: 'Some Text',
  variant: 'outline',
};

export const Delete: Story = (args) => (
  <Chip text='Some Text' variant='fill' {...args} />
);
Delete.args = {
  text: 'Some Text',
  variant: 'outline',
  handleDelete: () => null,
};

export const Icon: Story = (args) => (
  <Chip text='Some Text' variant='fill' {...args} />
);
Icon.args = {
  text: 'Some Text',
  variant: 'fill',
  handleDelete: () => null,
  icon: <Alien size={18} weight='fill' />,
};
