import Image from 'next/image';
import * as S from './styles';
import { Trash2Outline } from '@styled-icons/evaicons-outline';

export default function ProductResume() {
  return (
    <S.Container>
      <div>
        <Image
          src="https://i.zst.com.br/thumbs/12/2/30/-845275734.jpg"
          alt="Iphone 14"
          width={180}
          height={150}
        />
        <S.ProductInfo>
          <span>Iphone 14 pro max</span>
          <span>R$ 4000,00</span>
          <span>Frete grátis</span>
        </S.ProductInfo>
      </div>
      <Trash2Outline size={36} aria-label="Delete item" color="#4b4d63" />
    </S.Container>
  );
}
