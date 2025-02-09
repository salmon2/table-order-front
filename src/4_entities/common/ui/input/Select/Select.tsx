import * as Styled from './style';
import ReactSelect from 'react-select';
import { SelectStyle } from './style';

type SelectProps = {
  style?: React.CSSProperties;
  isSearchable: boolean;
  value: string | string[] | undefined;
  placeholder: string;
  options: { value: string; label: string }[];
};

const Select = ({
  style = { width: '200px' },
  isSearchable = false,
  value,
  placeholder,
  options = [],
}: SelectProps) => {
  const selectedValue = Array.isArray(value)
    ? options.filter((option) => value.includes(option.value))
    : options.find((option) => option.value == value);

  return (
    <Styled.SelectField style={style} $isFlex={false}>
      <ReactSelect
        placeholder={placeholder}
        value={selectedValue}
        isSearchable={isSearchable}
        options={options}
        styles={{ ...SelectStyle }}
        menuPlacement='auto'
        noOptionsMessage={() => <Styled.NoSearchResultText>검색결과가 없습니다.</Styled.NoSearchResultText>}
      />
    </Styled.SelectField>
  );
};
export default Select;
