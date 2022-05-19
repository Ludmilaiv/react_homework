import { ChatList } from '.';
import { Story } from '@storybook/react';

export default {
  title: 'MyComponents/MessageList',
  component: ChatList,
};

const Template: Story = () => <ChatList />;

export const Primary = Template.bind({});
Primary.args = {
  chats: [
    { id: '222', name: 'Chat 1' },
    { id: '111', name: 'Chat 2' },
  ],
};
