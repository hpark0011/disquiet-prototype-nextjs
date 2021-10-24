import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import ChipDelete from '../../assets/icons/chip_delete.svg';
import ArrowTriangleDown from '../../assets/icons/arrow_triangle_down.svg';

const MultiSelectDropDownMenu = ({
  placeholder,
  last,
  optionList,
  setSelection,
}) => {
  const [options, setOptions] = useState(optionList);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  const onOptionClick = (value) => {
    if (selectedItems.length > 2) {
      return <div>can't exceed three </div>;
    }
    const newSelectedItem = options.filter(
      (option) => option.value === value
    )[0];
    setSelectedItems([...selectedItems, newSelectedItem]);
    const newOptions = options.filter((option) => option.value !== value);
    setOptions(newOptions);
    setIsOpen(false);
  };

  useEffect(() => {
    setSelection(selectedItems);
  }, [selectedItems]);

  const deleteSelectedListItem = (value, e) => {
    const newSelectedItems = selectedItems.filter(
      (selectedItem) => selectedItem.value !== value
    );
    setSelectedItems(newSelectedItems);
    const newOptions = selectedItems.filter(
      (selectedItem) => selectedItem.value === value
    )[0];
    setOptions([...options, newOptions]);
    e.stopPropagation();
    setIsOpen(true);
  };

  const openMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClick = (e) => {
    if (ref.current.contains(e.target)) {
      return;
    }
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  });

  return (
    <MultiSelectDropDownContainer ref={ref}>
      <DropDownHeader last={last} onClick={openMenu}>
        <div className='dropdown-header-wrapper'>
          <div className='dropdown-header-label'>{placeholder}</div>
          <SelectedList>
            {selectedItems.map((selectedItem) => {
              const { value, label } = selectedItem;
              return (
                <SelectedListItem
                  onClick={(e) => deleteSelectedListItem(value, e)}
                  value={value}
                  key={value}
                >
                  {label}
                  <ChipDeleteIcon value={value} />
                </SelectedListItem>
              );
            })}
          </SelectedList>
        </div>
        <ArrowTriangleDownIcon />
      </DropDownHeader>
      <DropDownListContainer $isOpen={isOpen}>
        <DropDownList>
          {options &&
            options.map((option) => {
              const { value, label } = option;
              return (
                <ListItem key={value} onClick={() => onOptionClick(value)}>
                  {label}
                </ListItem>
              );
            })}
        </DropDownList>
      </DropDownListContainer>
    </MultiSelectDropDownContainer>
  );
};

const MultiSelectDropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
`;

const DropDownHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 8px;
  padding-right: 0px;
  border-top: ${({ last }) =>
    last ? '0px solid #f5f5f7' : '1px solid #f5f5f7'};
  border-bottom: 1px solid #f5f5f7;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
  z-index: 0;
  background-color: #fff;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #fdfdfd;
  }

  .dropdown-header-wrapper {
    display: flex;
    align-items: center;
  }

  .dropdown-header-label {
    font-size: 14px;
    color: #8e8e8e;
    margin-right: 8px;
  }
`;

const DropDownListContainer = styled.div`
  width: 100%;
  transform: ${({ $isOpen }) => ($isOpen ? 'scaleY(1)' : 'scaleY(0)')};
  transform-origin: top;
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  transition: transform 0.2s cubic-bezier(0, 1, 0, 1);
  position: relative;
  z-index: 100;
`;

const DropDownList = styled.div`
  border-radius: 1rem;
  padding: 4px;
  margin: 0;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 500;
  line-height: 1em;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.12);
  width: 100%;
  position: fixed;
  top: 8px;
  background-color: #fff;
  max-height: 208px;
  overflow-y: scroll;
`;

const ListItem = styled.div`
  list-style: none;
  margin-bottom: 4px;
  font-size: 14px;
  line-height: 1em;
  width: 100%;
  color: #8e8e8e;
  padding: 8px 8px;
  background-color: transparent;
  border-radius: 12px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  font-weight: 400;

  &:last-child {
    margin-bottom: 0px;
  }

  &:hover {
    box-shadow: 0px 0px 3px #fff;
    background-color: #f5f5f7;
  }
`;

const SelectedList = styled.div`
  display: flex;
`;

const SelectedListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2px 2px 2px 6px;
  background-color: ${({ value }) =>
    value === 'insight'
      ? '#E8FAF0'
      : value === 'idea'
      ? '#FFF5E6'
      : value === 'mvp'
      ? '#E8F2FF'
      : value === 'findteammate'
      ? '#FFF3F7'
      : '#F0EEFF'};
  border-radius: 8px;
  margin: 0 3px;
  color: ${({ value }) =>
    value === 'insight'
      ? '#1BCE6B'
      : value === 'idea'
      ? '#FF9700'
      : value === 'mvp'
      ? '#157BFF'
      : value === 'findteammate'
      ? '#FD88AA'
      : '#6D55FF'};
  cursor: pointer;
  font-size: 13px;
  line-height: 13px;

  &:hover {
    opacity: 0.7;
  }
`;

const ChipDeleteIcon = styled(ChipDelete)`
  fill: ${({ value }) =>
    value === 'insight'
      ? '#1BCE6B'
      : value === 'idea'
      ? '#FF9700'
      : value === 'mvp'
      ? '#157BFF'
      : value === 'findteammate'
      ? '#FD88AA'
      : '#6D55FF'};
`;

const ArrowTriangleDownIcon = styled(ArrowTriangleDown)`
  fill: #c4c4c4;
`;

export default MultiSelectDropDownMenu;
