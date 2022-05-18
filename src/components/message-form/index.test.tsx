import { MessageForm } from './';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('MessageForm', () => {
  it('render component', () => {
    const mockFunction = jest.fn();
    render(<MessageForm addMessage={mockFunction} />);
  });

  it('render with snapshot', () => {
    const mockFunction = jest.fn();
    const { asFragment } = render(<MessageForm addMessage={mockFunction} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('render multiply components', () => {
    const mockFunction = jest.fn();
    render(
      <>
        <MessageForm addMessage={mockFunction} />
        <MessageForm addMessage={mockFunction} />
      </>
    );

    expect(screen.queryAllByRole('form').length).toBe(2);
  });
});
