import * as Styled from './style';

type BaseLayoutProps = {
  headComponent: React.ReactNode;
  leftComponent: React.ReactNode;
  rightComponent: React.ReactNode;
  children: React.ReactNode;

  isShowLeft: boolean;
  isShowRight: boolean;
};

const BaseLayout = ({
  headComponent,
  leftComponent,
  rightComponent,
  children,
  isShowLeft,
  isShowRight,
}: BaseLayoutProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Header>{headComponent}</Styled.Header>
      <Styled.Body>
        <Styled.GNBLeftNav $isShowNav={isShowLeft}>{leftComponent}</Styled.GNBLeftNav>
        <Styled.MainSection>{children}</Styled.MainSection>
        <Styled.GNBRightNav $isShowNav={isShowRight}>{rightComponent}</Styled.GNBRightNav>
      </Styled.Body>
    </Styled.Wrapper>
  );
};
export default BaseLayout;
