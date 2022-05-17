import { MessageFormFunction } from './';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('MessageFormFunction', () => {
  it('render component', () => {
    render(
      <MessageFormFunction
        addMessage={() => {
          return;
        }}
      />
    );
  });

  it('render with snapshot', () => {
    const { asFragment } = render(
      <MessageFormFunction
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
        <MessageFormFunction
          addMessage={() => {
            return;
          }}
        />
        <MessageFormFunction
          addMessage={() => {
            return;
          }}
        />
      </>
    );

    expect(screen.queryAllByRole('form').length).toBe(2);
  });
});
