import { BaseLayout } from '@/0_app/layouts/BaseLayout';
import { Header } from '@/4_entities/header/ui';
import { Navigation } from '@/4_entities/navigation/ui';
import { useState } from 'react';

type MainPageProps = {};

const MainPage = ({}: MainPageProps) => {
  const [leftNav, setIsnav] = useState<boolean>(true);
  const onCHange = () => setIsnav((prev) => !prev);

  const menuItemList = [
    { label: '추천메뉴', href: '/recommend', isSelect: true },
    { label: '밥', href: '/rice', isSelect: false },
  ];

  return (
    <BaseLayout.Wrapper>
      <BaseLayout.Header>
        <Header onClickLeftNav={onCHange} />
      </BaseLayout.Header>
      <BaseLayout.Body>
        <BaseLayout.LeftNav $isShowNav={leftNav}>
          {leftNav && <Navigation menuItemList={menuItemList} />}
        </BaseLayout.LeftNav>
        <BaseLayout.MainSection>{'hello'}</BaseLayout.MainSection>
        <BaseLayout.RightNav $isShowNav={false}>{undefined}</BaseLayout.RightNav>
      </BaseLayout.Body>
      <BaseLayout.Footer>helllo</BaseLayout.Footer>
    </BaseLayout.Wrapper>
  );
};

export default MainPage;
