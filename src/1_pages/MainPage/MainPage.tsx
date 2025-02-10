import { BaseLayout } from '@/0_app/layouts/BaseLayout';
import { Header } from '@/4_entities/header/ui';
import { ItemCard } from '@/4_entities/item/ui';
import { Navigation } from '@/4_entities/navigation/ui';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import { createArray } from '../../5_shared/util/common';
import { Footer } from '@/4_entities/footer/ui';

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
        <BaseLayout.MainSection>
          <Grid container spacing={2}>
            {createArray(12).map((item) => (
              <Grid key={item} item xs={12} sm={12} md={4}>
                <ItemCard />
              </Grid>
            ))}
          </Grid>
        </BaseLayout.MainSection>
        <BaseLayout.RightNav $isShowNav={false}>{undefined}</BaseLayout.RightNav>
      </BaseLayout.Body>
      <BaseLayout.Footer>
        <Footer />
      </BaseLayout.Footer>
    </BaseLayout.Wrapper>
  );
};

export default MainPage;
