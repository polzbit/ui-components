import React from 'react';
import { Button } from './';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'UI Component/Button',
  component: Button,
  argTypes: {
    name: {
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: 'button' },
      },
      control: { type: 'text' },
    },
    tooltip: {
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: '' },
      },
      control: { type: 'text' },
    },
    variant: {
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: '' },
      },
      control: { type: 'text' },
    },
    onClick: {
      action: 'clicked',
      table: {
        type: {
          summary: 'fn(event)',
        },
        defaultValue: null,
      },
      control: null,
    },
  },
} as Meta;

export const Default: Story = (args) => (
  <Button variant='fill' {...args}>
    <span>CLICK HERE</span>
  </Button>
);
Default.args = {
  label: 'Button',
  variant: 'fill',
  tooltipDirection: 'right',
};

export const Outline: Story = (args) => (
  <Button variant='outline' {...args}>
    <span>CLICK HERE</span>
  </Button>
);
Outline.args = {
  label: 'Button',
  variant: 'outline',
  tooltipDirection: 'right',
};

export const Text: Story = (args) => (
  <Button variant='text' {...args}>
    <span>CLICK HERE</span>
  </Button>
);
Text.args = {
  label: 'Button',
  variant: 'text',
  tooltipDirection: 'right',
};

export const Tooltip: Story = (args) => (
  <Button variant='outline' {...args}>
    <span>CLICK HERE</span>
  </Button>
);
Tooltip.args = {
  label: 'Button',
  tooltip: 'test text',
  tooltipDirection: 'right',
  variant: 'outline',
};
