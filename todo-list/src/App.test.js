import { render } from '@testing-library/react';
import App from './App';

test('smoke test', () => {
  render(<App />);
});

it("snapshot test", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
})
