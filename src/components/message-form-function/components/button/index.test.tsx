import { Button } from './';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('Button', () => {
  it('render component', () => {
    render(<Button content="click" />);
  });

  it('render with snapshot', () => {
    const { asFragment } = render(<Button content="click" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('render component with text', () => {
    render(<Button content="click" />);
    expect(screen.getByText(/click/)).toBeInTheDocument();
  });

  it('render multiply components', () => {
    render(
      <>
        <Button content="click" />
        <Button content="click1" />
        <Button content="click2" />
        <Button content="click3" />
      </>
    );

    expect(screen.queryAllByRole('button').length).toBe(4);
  });

  it('button is disabled', () => {
    render(<Button disabled content="click" />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('button click with userEvent', async () => {
    const mockHandler = jest.fn();
    render(<Button onClick={mockHandler} content="click" />);
    await userEvent.click(screen.getByRole('button'));
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });

  it('button async click', async () => {
    const mockHandler = jest.fn();
    render(
      <Button content="click" onClick={() => setTimeout(mockHandler, 2000)} />
    );
    await userEvent.click(screen.getByText(/click/));
    setTimeout(() => expect(mockHandler).toHaveBeenCalledTimes(1), 2100);
  });
});
