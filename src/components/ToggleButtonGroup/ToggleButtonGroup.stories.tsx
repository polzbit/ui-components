import React, { MouseEventHandler } from 'react';
import { ToggleButtonGroup } from '.';
import { Meta, Story } from '@storybook/react';
import { ToggleButton } from '../ToggleButton/ToggleButton';
import { TextAlignCenter, TextAlignLeft, TextAlignRight } from 'phosphor-react';

export default {
  title: 'UI Component/ToggleButtonGroup',
  component: ToggleButtonGroup,
} as Meta;

const mockChange: MouseEventHandler = () => null;

export const Default: Story = (args) => (
  <ToggleButtonGroup direction='row' {...args}>
    <ToggleButton variant='outline' value='align-left' handleClick={mockChange}>
      <TextAlignLeft size={22} />
    </ToggleButton>
    <ToggleButton
      variant='outline'
      value='align-center'
      handleClick={mockChange}
    >
      <TextAlignCenter size={22} />
    </ToggleButton>
    <ToggleButton
      variant='outline'
      value='align-right'
      handleClick={mockChange}
    >
      <TextAlignRight size={22} />
    </ToggleButton>
  </ToggleButtonGroup>
);
Default.args = {
  selected: 'align-left',
  direction: 'row',
};
