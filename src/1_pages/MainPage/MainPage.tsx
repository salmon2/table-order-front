import { BaseLayout } from '@/0_app/layouts/BaseLayout';
import { GrayComponent } from '@/4_entities/common/ui';
import { Header } from '@/4_entities/header/ui';
import { useState } from 'react';

type MainPageProps = {};

const MainPage = ({}: MainPageProps) => {
  const [leftNav, setIsnav] = useState<boolean>(false);
  const onCHange = () => setIsnav((prev) => !prev);

  return (
    <BaseLayout.Wrapper>
      <BaseLayout.Header>
        <Header onClickLeftNav={onCHange} />
      </BaseLayout.Header>
      <BaseLayout.Body>
        <BaseLayout.LeftNav $isShowNav={leftNav}>{<GrayComponent />}</BaseLayout.LeftNav>
        <BaseLayout.MainSection>{'hello'}</BaseLayout.MainSection>
        <BaseLayout.RightNav $isShowNav={false}>{undefined}</BaseLayout.RightNav>
      </BaseLayout.Body>
    </BaseLayout.Wrapper>
  );
};

export default MainPage;
