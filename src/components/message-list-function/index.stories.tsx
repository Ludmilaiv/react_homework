import { MessageListFunction } from '.';
import { IShowMessageListProps } from './interface';
import { Story } from '@storybook/react';
import { AUTHOR } from '../../constants';

export default {
  title: 'MyComponents/MessageList',
  component: MessageListFunction,
};

const Template: Story<IShowMessageListProps> = (args) => <MessageListFunction {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  messageList: [
    {id: '222', author: AUTHOR.USER, authorName: 'Bot', text: 'Example text 2'},
    {id: '111', author: AUTHOR.USER, authorName: 'Andrew', text: 'Example text 1'},
  ],
};
