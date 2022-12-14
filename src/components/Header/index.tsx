import Logo from 'components/Logo';
import * as S from './styles';
import { ShoppingCartOutline } from '@styled-icons/evaicons-outline';
import Link from 'next/link';

export default function Header() {
  return (
    <S.Container>
      <Logo />
      <Link href="/cart">
        <S.CartInfo>
          <S.CartTextGroup>
            <span>Meu carrinho</span>
            <span>0 itens</span>
          </S.CartTextGroup>
          <ShoppingCartOutline size={36} aria-label="Cart" color="#363636" />
        </S.CartInfo>
      </Link>
    </S.Container>
  );
}
