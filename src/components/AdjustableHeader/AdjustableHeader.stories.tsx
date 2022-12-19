import React from 'react';
import { AdjustableHeader } from '.';
import { Meta, Story } from '@storybook/react';
import { Button } from '../Button';

export default {
  title: 'UI Component/AdjustableHeader',
  component: AdjustableHeader,
} as Meta;

export const Default: Story = (args) => (
  <div
    style={{
      height: '1000px',
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
    }}
  >
    <AdjustableHeader logo={<div>LOGO</div>} {...args}>
      <Button variant='text'>PAGE 1</Button>
      <Button variant='text'>PAGE 2</Button>
      <Button variant='text'>PAGE 3</Button>
    </AdjustableHeader>
  </div>
);
Default.args = {};
