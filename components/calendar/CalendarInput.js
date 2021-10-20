import styled from 'styled-components';
import { forwardRef } from 'react';
import ArrowTriangleDown from '../../assets/icons/arrow_triangle_down.svg';

const CalendarInput = forwardRef(({ value, onClick }, ref) => (
  <CalendarInputWrapper>
    <CalendarInputButton
      className='makerlog-calendar-input'
      onClick={onClick}
      ref={ref}
    >
      {value}
      <ArrowTriangleDownIcon />
    </CalendarInputButton>
  </CalendarInputWrapper>
));

const CalendarInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CalendarInputButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  font-family: 'Spoqa Han Sans Neo';
  background-color: transparent;
  outline: none;
  cursor: pointer;
  padding: 6px 4px 4px 12px;
  transition: all 0.2s ease-in-out;
  border-radius: 12px;

  &:hover {
    background-color: #f5f5f7;
  }
`;

const ArrowTriangleDownIcon = styled(ArrowTriangleDown)`
  fill: #c4c4c4;
  margin-bottom: 2px;
`;

export default CalendarInput;
