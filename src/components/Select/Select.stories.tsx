import React from 'react';
import { Select } from '.';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'UI Component/Select',
  component: Select,
  argTypes: {
    selected: {
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
  },
} as Meta;

export const Default: Story = (args) => (
  <Select
    selected=''
    list={['item 1', 'item 2', 'item 3', 'item 4']}
    onSelect={() => null}
    {...args}
  />
);
Default.args = {
  placeholder: 'Some Text',
};

export const Value: Story = (args) => (
  <Select
    selected='item 2'
    list={['item 1', 'item 2', 'item 3', 'item 4']}
    onSelect={() => null}
    {...args}
  />
);
Default.args = {
  placeholder: 'Some Text',
};
