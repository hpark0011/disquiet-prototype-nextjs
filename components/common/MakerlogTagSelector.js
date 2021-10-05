import styled from 'styled-components';
import OutlinedInput from '@mui/material/OutlinedInput';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { useState } from 'react';
import Box from '@mui/material/Box';
import ArrowTriangleDown from '../../assets/icons/arrow_triangle_down.svg';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const tags = ['아이디어', 'MVP', '마일스톤', '인사이트', '성과'];

const MakerlogTagSelector = () => {
  const [tag, setTag] = useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setTag(value);
  };

  return (
    <Container>
      <StyledInputLabel>태그를 달아보세요.</StyledInputLabel>
      <StyledSelect
        labelId='demo-multiple-chip-label'
        id='demo-multiple-chip'
        multiple
        value={tag}
        onChange={handleChange}
        IconComponent={() => <ArrowTriangleDownIcon />}
        input={
          <StyledInput
            id='select-multiple-chip'
            label='Chip'
            disableUnderline={true}
            placeholder='hello'
          >
            태그를 달아보세요.
          </StyledInput>
        }
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {tags.map((tag) => (
          <MenuItem key={tag} value={tag}>
            {tag}
          </MenuItem>
        ))}
      </StyledSelect>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 8px;
  border-bottom: 1px solid #f5f5f7;
`;

const StyledSelect = styled(Select)`
  outline: none;
  width: 100%;
`;

const ArrowTriangleDownIcon = styled(ArrowTriangleDown)`
  fill: #c4c4c4;
`;

const StyledInputLabel = styled(InputLabel)`
  width: 100%;
  overflow: unset;
  font-size: 14px;
  line-height: 14px;
  color: #c4c4c4;
`;

const StyledInput = styled(Input)`
  color: #707070;
`;

export default MakerlogTagSelector;
