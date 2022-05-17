import { MessageList } from '.';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AUTHOR } from '../../constants';

describe('MessageList', () => {
  it('render empty list', () => {
    render(<MessageList messageList={[]} />);
  });

  it('render list', () => {
    const { asFragment } = render(
      <MessageList
        messageList={[
          {
            id: '2',
            text: 'test text',
            authorName: 'test bot',
            author: AUTHOR.BOT,
          },
          {
            id: '1',
            text: 'test bot text',
            authorName: 'test',
            author: AUTHOR.USER,
          },
        ]}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('render multiply components', () => {
    render(
      <>
        <MessageList messageList={[]} />
        <MessageList messageList={[]} />
      </>
    );

    expect(screen.queryAllByRole('list').length).toBe(2);
  });
});
