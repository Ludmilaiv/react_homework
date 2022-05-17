import { MessageForm } from './';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('MessageForm', () => {
  it('render component', () => {
    render(
      <MessageForm
        addMessage={() => {
          return;
        }}
      />
    );
  });

  it('render with snapshot', () => {
    const { asFragment } = render(
      <MessageForm
        addMessage={() => {
          return;
        }}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('render multiply components', () => {
    render(
      <>
        <MessageForm
          addMessage={() => {
            return;
          }}
        />
        <MessageForm
          addMessage={() => {
            return;
          }}
        />
      </>
    );

    expect(screen.queryAllByRole('form').length).toBe(2);
  });
});
