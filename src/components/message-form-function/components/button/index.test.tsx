import { Button } from './';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('Button', () => {
  it('render component', () => {
    render(<Button className='test' content='click'/>);
  });

  it('render with snapshot', () => {
    const { asFragment } = render(<Button className='test' content='click'/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('render component with text', () => {
    render(<Button className='test' content='click'/>);
    expect(screen.getByText(/click/)).toBeInTheDocument();
  });

  it('render multiply components', () => {
    render(<>
      <Button className='test' content='click'/>
      <Button className='test' content='click1'/>
      <Button className='test' content='click2'/>
      <Button className='test' content='click3'/>
    </>
    );

    expect(screen.queryAllByRole('button').length).toBe(4);
  });

  it('button is disabled', () => {
    render(<Button className='test' disabled content='click'/>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('button have style border-radius: 3', () => {
    render(<Button className='test' content='click'/>);
    expect(screen.getByRole('button')).toHaveStyle({borderRadius: '3'});
  });

  it('button click with userEvent', async () => {
    const mockHandler = jest.fn();
    render(<Button className='test' onClick={mockHandler} content='click'/>);
    await userEvent.click(screen.getByRole('button'));
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });

  it('button async click', async () => {
    const mockHandler = jest.fn();
    render(<Button className='test' content='click' onClick={() => setTimeout(mockHandler, 2000)} />);
    await userEvent.click(screen.getByText(/click/));
    setTimeout(() => expect(mockHandler).toHaveBeenCalledTimes(1), 2100);
  });
});