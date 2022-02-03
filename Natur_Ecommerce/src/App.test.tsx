import App from './App';
import { render } from '@testing-library/react';

describe('App testing', () => {
  it('should render without crashing', () => {
    render(<App />);
  });
});
