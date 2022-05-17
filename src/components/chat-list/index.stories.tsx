import { ChatList } from '.';
import { IShowChatListProps } from './interface';
import { Story } from '@storybook/react';

export default {
  title: 'MyComponents/MessageList',
  component: ChatList,
};

const Template: Story<IShowChatListProps> = (args) => <ChatList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  chats: [
    { id: '222', name: 'Chat 1' },
    { id: '111', name: 'Chat 2' },
  ],
};
