import React from 'react';
import { TextInput } from '.';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'UI Component/TextInput',
  component: TextInput,
  argTypes: {
    value: {
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: '' },
      },
      control: { type: 'text' },
    },
    placeholder: {
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: '' },
      },
      control: { type: 'text' },
    },
    error: {
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: '' },
      },
      control: { type: 'text' },
    },
  },
} as Meta;

export const Default: Story = (args) => <TextInput {...args} />;
Default.args = {
  placeholder: 'Some Text',
};

export const Error: Story = (args) => <TextInput {...args} />;
Error.args = {
  placeholder: 'Input Placeholder',
  value: 'Value',
  error: 'Wrong value.',
};
