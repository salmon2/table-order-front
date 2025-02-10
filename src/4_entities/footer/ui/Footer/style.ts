import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.gray1};
  display: flex;
  gap: 10px;
  align-items: center;
  height: 40px;

  padding: 0px 20px;
`;

export const HeaderText = styled.h1`
  ${({ theme }) => theme.fontFamily.Poppins_800};
  font-size: ${({ theme }) => theme.fontSize['150rem']};
`;
