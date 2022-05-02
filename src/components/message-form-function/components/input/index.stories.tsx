import { Input } from '.';
import { IInputProps } from './interface';
import { Story } from '@storybook/react';

export default {
  title: 'MyComponents/Input',
  component: Input,
  argTypes: {
    onChange: { action: 'change' },
  }
};

const Template: Story<IInputProps> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'input text',
};
