import * as S from './styles';
import { FlashOutline } from '@styled-icons/evaicons-outline';

export default function Logo() {
  return (
    <S.Container>
      <S.Logo>TKstore</S.Logo>
      <FlashOutline size={36} aria-label="Cart" color="#363636" />
    </S.Container>
  );
}
