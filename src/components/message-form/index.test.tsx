import { MessageForm } from './';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('MessageForm', () => {
  it('render component', () => {
    render(<MessageForm />);
  });

  it('render with snapshot', () => {
    const { asFragment } = render(<MessageForm />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('render multiply components', () => {
    render(
      <>
        <MessageForm />
        <MessageForm />
      </>
    );

    expect(screen.queryAllByRole('form').length).toBe(2);
  });
});
