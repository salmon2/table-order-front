import styled from 'styled-components';
import { Card } from '@mui/material';

export const Wrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Name = styled.div`
  ${({ theme }) => theme.fontFamily.Poppins_800}
  font-size: ${({ theme }) => theme.fontSize['150rem']}
`;

export const Price = styled.div`
  ${({ theme }) => theme.fontFamily.Poppins_300}
  font-size: ${({ theme }) => theme.fontSize['125rem']}
`;
