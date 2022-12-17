import CartFooter from 'components/CartFooter';
import Header from 'components/Header';
import ProductResume from 'components/ProductResume';
import * as S from './styles';

const data = [1, 2, 3, 4, 5];

export default function Cart() {
  return (
    <S.CartContainer>
      <Header />
      {data.map((product) => (
        <ProductResume key={product} />
      ))}
      <CartFooter />
    </S.CartContainer>
  );
}
