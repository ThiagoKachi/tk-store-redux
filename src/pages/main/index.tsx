import Header from 'components/Header';
import ProductCard from 'components/ProductCard';
import * as S from './styles';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Main() {
  return (
    <S.HomeContainer>
      <Header />
      <S.ProductList>
        {data.map((product) => (
          <ProductCard key={product} />
        ))}
      </S.ProductList>
    </S.HomeContainer>
  );
}
