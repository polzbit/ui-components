import React from 'react';
import { Tabs } from '.';
import { Meta, Story } from '@storybook/react';
import { Tab } from './Tab/Tab';

export default {
  title: 'UI Component/Tabs',
  component: Tabs,
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
  <Tabs direction='row' {...args}>
    <Tab value='tab 1'>
      <div
        style={{
          height: '200px',
          width: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Tab 1 Content
      </div>
    </Tab>
    <Tab value='tab 2'>
      <div
        style={{
          height: '200px',
          width: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Tab 2 Content
      </div>
    </Tab>
  </Tabs>
);
Default.args = {
  direction: 'row',
};
