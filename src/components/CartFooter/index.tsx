import * as S from './styles';

export default function CartFooter() {
  return (
    <S.Container>
      <S.Button>Finalizar pedido</S.Button>
      <S.TotalInfos>
        <span>Total: </span>
        <span>R$ 4000,00</span>
      </S.TotalInfos>
    </S.Container>
  );
}
