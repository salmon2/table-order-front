import Image from 'next/image';
import * as Styled from './style';

type ItemCardProps = {};

const ItemCard = ({}: ItemCardProps) => {
  return (
    <Styled.Wrapper>
      <Image
        style={{ width: '100%', height: '100%' }}
        src='https://cdn.mindgil.com/news/photo/202004/69068_2873_1455.jpg'
        alt={'삼겹살샘플'}
        width='100'
        height='100'
      />
      <Styled.Name>삼겹살</Styled.Name>
      <Styled.Price>10,000</Styled.Price>
    </Styled.Wrapper>
  );
};
export default ItemCard;
