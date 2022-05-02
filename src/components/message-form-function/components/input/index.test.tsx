import { Input } from './';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Input', () => {
  it('render component', () => {
    render(<Input className='test' placeholder='text' value=''/>);
  });

  it('render with snapshot', () => {
    const { asFragment } = render(<Input className='test' placeholder='text' value=''/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('render component with text', () => {
    render(<Input className='test' placeholder='text' value='my text'/>);
    expect(screen.getByDisplayValue(/my text/)).toBeInTheDocument();
  });

  it('render multiply components', () => {
    render(<>
      <Input className='test' placeholder='text' value='text'/>
      <Input className='test' placeholder='text' value='text'/>
      <Input className='test' placeholder='text' value='text'/>
    </>
    );

    expect(screen.queryAllByDisplayValue('text').length).toBe(3);
  });

  it('input change with fireEvent', () => {
    const mockHandler = jest.fn();
    render(<Input className='test' onChange={mockHandler} placeholder='text' value=''/>);
    fireEvent.change(screen.getByPlaceholderText('text'));
    setTimeout(() => expect(mockHandler).toHaveBeenCalledTimes(1), 100);
  });

  it('input async change', async () => {
    const mockHandler = jest.fn();
    render(<Input className='test' onChange={() => setTimeout(mockHandler, 2000)} placeholder='text' value=''/>);
    fireEvent.change(screen.getByPlaceholderText('text'));
    setTimeout(() => expect(mockHandler).toHaveBeenCalledTimes(1), 2100);
  });
});