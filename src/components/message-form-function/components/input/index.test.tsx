import { Input } from './';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Input', () => {
  it('render component', () => {
    render(<Input autofocus={false} placeholder="text" value="" />);
  });

  it('render with snapshot', () => {
    const { asFragment } = render(
      <Input autofocus={false} placeholder="text" value="" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
