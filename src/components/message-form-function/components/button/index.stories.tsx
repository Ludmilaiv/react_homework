import { Button } from '.';
import { IButtonProps } from './interface';
import { Story } from '@storybook/react';

export default {
  title: 'MyComponents/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'click' },
  }
};

const Template: Story<IButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  content: 'click',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args= {
  content: 'not click',
  disabled: true,
};