import { Button } from '@/4_entities/common/ui';
import * as Styled from './style';

import { PiCodesandboxLogo } from 'react-icons/pi';

type HeaderProps = { onClickLeftNav: () => void };

const Header = ({ onClickLeftNav }: HeaderProps) => {
  return (
    <Styled.Wrapper>
      <PiCodesandboxLogo size={40} />
      <Styled.HeaderText>테이블 오더</Styled.HeaderText>
      {!!onClickLeftNav && (
        <Button
          onClick={onClickLeftNav}
          style={{ marginLeft: 'auto' }}
          disabled={false}
          type={'button'}
          variant={'contained'}
        >
          목록
        </Button>
      )}
    </Styled.Wrapper>
  );
};
export default Header;
