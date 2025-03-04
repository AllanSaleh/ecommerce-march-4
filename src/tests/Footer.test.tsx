import { render } from '@testing-library/react';
import Footer from '../components/Footer';

test('matches snapshot', () => {
  // Render the component
  const { asFragment } = render(<Footer />);

  // Create a snapshot of the rendered component
  expect(asFragment()).toMatchSnapshot();
});
