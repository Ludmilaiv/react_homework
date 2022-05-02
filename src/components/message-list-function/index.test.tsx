import { MessageListFunction } from './';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AUTHOR } from '../../constants';

describe('MessageListFunction', () => {
  it('render empty list', () => {
    render(<MessageListFunction messageList={[]} />);
  });

  it('render list', () => {
    const { asFragment } = render(<MessageListFunction messageList={[
      {id: '2', text: 'test text', authorName: 'test bot', author: AUTHOR.BOT}, 
      {id: '1', text: 'test bot text', authorName: 'test', author: AUTHOR.USER}]} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('render multiply components', () => {
    render(<>
      <MessageListFunction messageList={[]} />
      <MessageListFunction messageList={[]} />
    </>
    );

    expect(screen.queryAllByRole('list').length).toBe(2);
  });
});