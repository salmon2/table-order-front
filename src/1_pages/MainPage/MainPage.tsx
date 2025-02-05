import BaseLayout from '@/0_app/layouts/BaseLayout';
import { layoutSelect, setIsShowLeft } from '@/5_shared/redux/layout/layoutSlice';
import { GrayComponent } from '@/4_entities/settings';
import { useDispatch, useSelector } from 'react-redux';

type MainPageProps = {};

const MainPage = ({}: MainPageProps) => {
  const dispatch = useDispatch();
  const { isShowLeft, isShowRight } = useSelector(layoutSelect);
  const onClickLeft = () => {
    dispatch(setIsShowLeft(!isShowLeft));
  };

  return (
    <BaseLayout
      headComponent={<button onClick={onClickLeft}>버튼</button>}
      leftComponent={<GrayComponent />}
      rightComponent={undefined}
      isShowLeft={isShowLeft}
      isShowRight={isShowRight}
    >
      hello
    </BaseLayout>
  );
};
export default MainPage;
