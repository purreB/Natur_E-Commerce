import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import ProductList from './ProductList';

describe('ProductList Test', () => {
  it('Should render without crashing', () => {
    render(
      <RecoilRoot>
        <ProductList />
      </RecoilRoot>
    );
  });

  it('Should render 5 list items', () => {
    render(
      <RecoilRoot>
        <ProductList />
      </RecoilRoot>
    );
    let ul = screen.getByTestId('ulTest');
    expect(ul.children).toHaveLength(5);
  });
});
