import styled from 'styled-components';

const leftWidth = '240px';
const headerHeight = '44px';
const rightWidth = '350px';
const ZINDEX_SIDEBAR = 100; /*수업화면 왼쪽사이드메뉴*/

export const Wrapper = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  @media (max-width: 720px) {
    width: calc(100% - 0.5px);
  }
`;

export const Header = styled.div`
  width: 100%;
  height: ${headerHeight};
  border-bottom: 1px solid black;
`;

export const Body = styled.div`
  display: flex;

  height: calc(100% - ${headerHeight});
  max-height: calc(100% - ${headerHeight});

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const LeftNav = styled.nav<{ $isShowNav: boolean }>`
  width: ${({ $isShowNav }) => ($isShowNav ? leftWidth : '0px')};
  height: 100%;
  visibility: ${(p) => (p.$isShowNav ? 'visible' : 'hidden')};
  overflow: hidden;
  transition: all 200ms linear;

  z-index: ${ZINDEX_SIDEBAR};

  background-color: #fbfbfb;
  border-right: 0.5px solid #d1d1d1;
  flex-shrink: 0;

  @media (max-width: 720px) {
    width: 100%;
    height: ${({ $isShowNav }) => ($isShowNav ? '300px' : '0px')};
  }
`;

export const RightNav = styled.div<{ $isShowNav: boolean }>`
  width: ${({ $isShowNav }) => ($isShowNav ? rightWidth : '0px')};
  overflow: hidden;
  transition: all 200ms linear;
  height: 100%;
`;

export const MainSection = styled.section``;
