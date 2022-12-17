import Image from 'next/image';
import * as S from './styles';

export default function ProductCard() {
  return (
    <S.Container>
      <Image
        src="https://i.zst.com.br/thumbs/12/2/30/-845275734.jpg"
        alt="Iphone 14"
        width={150}
        height={150}
      />
      <S.Title>Iphone 14 pro max</S.Title>
      <S.ProductInfos>
        <span>R$ 10,00</span>
        <span>Frete grátis</span>
      </S.ProductInfos>
      <S.Button>Adicionar ao carrinho</S.Button>
    </S.Container>
  );
}
