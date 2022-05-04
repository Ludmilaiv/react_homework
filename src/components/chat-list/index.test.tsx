import { ChatList } from './';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('ChatList', () => {
  it('render empty list', () => {
    render(<ChatList chats={[]} />);
  });

  it('render list', () => {
    const { asFragment } = render(<ChatList chats={[
      {id: '2', name: 'chat1'}, 
      {id: '1', name: 'chat2'}]} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('render multiply components', () => {
    render(<>
      <ChatList chats={[]} />
      <ChatList chats={[]} />
    </>
    );

    expect(screen.queryAllByRole('list').length).toBe(2);
  });
});