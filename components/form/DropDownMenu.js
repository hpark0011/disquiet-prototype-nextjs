import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import ArrowTriangleDown from '../../assets/icons/arrow_triangle_down.svg';

const DropDownMenu = ({
  label,
  icon,
  bgColor,
  onChange,
  options,
  value,
  placeholder,
}) => {
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClick = (e) => {
    if (ref.current.contains(e.target)) {
      return;
    }
    setIsOpen(false);
  };

  const onOptionClick = (selectedValue) => {
    onChange(selectedValue);
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <DropDownContainer ref={ref}>
      {label && <div className='label'>{label}</div>}
      <DropDownHeader onClick={openMenu}>
        <div className='dropdown-header'>
          {icon}
          <div className='dropdown-header-label'>
            {value.label || placeholder}
          </div>
        </div>
        <ArrowTriangleDownIcon $bgColor={bgColor} />
      </DropDownHeader>

      <DropDownListContainer $isOpen={isOpen}>
        <DropDownList>
          {options.map((option) => {
            const { label, value } = option;
            return (
              <ListItem key={value} onClick={() => onOptionClick(value)}>
                {label}
              </ListItem>
            );
          })}
        </DropDownList>
      </DropDownListContainer>
    </DropDownContainer>
  );
};

const DropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 168px;
  align-items: center;
  position: relative;

  .label {
    font-size: 12px;
    line-height: 1em;
    margin-bottom: 8px;
    color: #8e8e8e;
    width: 100%;
  }
`;

const DropDownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 4px 4px 6px;
  font-weight: 500;
  background: #f5f5f7;
  border-radius: 12px;
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
  &:hover {
    opacity: 0.7;
  }

  .dropdown-header {
    display: flex;
    align-items: center;
  }

  .dropdown-header-label {
    margin-left: 2px;
    font-size: 14px;
    line-height: 1em;
    color: #8e8e8e;
    font-weight: 400;
  }
`;

const DropDownListContainer = styled.div`
  width: 168px;
  transform: ${({ $isOpen }) => ($isOpen ? 'scaleY(1)' : 'scaleY(0)')};
  transform-origin: top;
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  transition: transform 0.2s cubic-bezier(0, 1, 0, 1);
  position: relative;
  z-index: 100;
`;

const DropDownList = styled.ul`
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
`;

const ListItem = styled.li`
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

const ArrowTriangleDownIcon = styled(ArrowTriangleDown)`
  fill: ${({ $bgColor }) =>
    $bgColor === 'purple'
      ? '#6d55ff'
      : $bgColor === 'pink'
      ? '#fd88aa'
      : '#c4c4c4'};
`;

export default DropDownMenu;
