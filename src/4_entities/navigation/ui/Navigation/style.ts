import styled, { css } from 'styled-components';
export const Wrapper = styled.menu`
  padding: 25px 25px 20px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Li = styled.li<{ $isActive: boolean }>`
  list-style: none;

  padding: 0px 5px;
  display: flex;
  align-items: center;

  height: 30px;

  font-size: ${({ theme }) => theme.fontSize['125rem']};
  ${({ theme }) => theme.fontFamily.Poppins_300};

  a {
    color: black;
    text-decoration: none;
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      background-color: orange;
      border-radius: 10px;
    `}
`;
