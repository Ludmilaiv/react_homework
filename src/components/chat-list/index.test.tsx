import { ChatList } from './';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

const chats = [
  { id: '2', name: 'chat1' },
  { id: '1', name: 'chat2' },
];

describe('ChatList', () => {
  it('render empty list', () => {
    render(
      <BrowserRouter>
        <ChatList
          chats={[]}
          onAddChat={() => {
            return;
          }}
        />
      </BrowserRouter>
    );
  });

  it('render list', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <ChatList
          chats={chats}
          onAddChat={() => {
            return;
          }}
        />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('render multiply components', () => {
    render(
      <BrowserRouter>
        <ChatList
          chats={[]}
          onAddChat={() => {
            return;
          }}
        />
        <ChatList
          chats={[]}
          onAddChat={() => {
            return;
          }}
        />
      </BrowserRouter>
    );

    expect(screen.queryAllByRole('list').length).toBe(2);
  });
});
