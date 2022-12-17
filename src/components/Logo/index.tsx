import * as S from './styles';
import { FlashOutline } from '@styled-icons/evaicons-outline';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
      <S.Container>
        <S.Logo>TKstore</S.Logo>
        <FlashOutline size={36} aria-label="Cart" color="#363636" />
      </S.Container>
    </Link>
  );
}
