import { theme } from '@/5_shared/styles/theme';
import styled, { css } from 'styled-components';

export const SelectField = styled.div<{ $isFlex: boolean }>`
  ${({ $isFlex }) =>
    $isFlex &&
    css`
      display: flex;
      align-items: center;
    `}
`;

export const SelectStyle = {
  control: (provided: any, state: any) => {
    return {
      ...provided,
      borderColor: state.isFocused ? theme.colors.gray1 : theme.colors.gray2,

      '&:hover': {
        borderColor: theme.colors.gray1,
      },
    };
  },
  container: (provided: any, state: any) => {
    return {
      ...provided,
      minHeight: '40px',
      width: state.selectProps.width ?? '100%',
      minWidth: state.selectProps.minWidth ?? '100%',
    };
  },
  placeholder: (provided: any) => {
    return {
      ...provided,
      color: theme.colors.gray1,
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    };
  },
  indicatorSeparator: () => ({
    display: 'none',
  }),
  indicatorsContainer: (provided: any) => ({
    ...provided,

    '&:hover': {
      color: theme.colors.gray1,
    },

    svg: {
      fill: theme.colors.gray1,
    },
  }),
  option: (provided: any, state: any) => {
    return {
      ...provided,
      backgroundColor: state.isSelected ? `#EEF2FD !important` : 'transparent',
      fontSize: theme.fontSize['default'],
      color: theme.colors.black,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',

      '&:hover': {
        backgroundColor: '#f5f5f5',
      },
    };
  },
};

export const NoSearchResultText = styled.p`
  font: ${(p) => p.theme.fontSize['1125rem']};
  color: ${(p) => p.theme.colors.gray1};
`;
