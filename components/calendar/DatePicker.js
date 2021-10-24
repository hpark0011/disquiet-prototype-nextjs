import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CalendarInput from './CalendarInput';
import CalendarHeader from './CalendarHeader';
import DayContents from './DayContents';

const CustomDatePicker = ({ startDate, setStartDate }) => {
  return (
    <StyledWrapper>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat='yyyy년 MM월 dd일'
        customInput={<CalendarInput />}
        popperPlacement='bottom'
        calendarClassName='custom-calendar-class'
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <CalendarHeader
            date={date}
            changeYear={changeYear}
            changeMonth={changeMonth}
            decreaseMonth={decreaseMonth}
            increaseMonth={increaseMonth}
            prevMonthButtonDisabled={prevMonthButtonDisabled}
            nextMonthButtonDisabled={nextMonthButtonDisabled}
          />
        )}
        renderDayContents={DayContents}
        showPopperArrow={false}
        disabledKeyboardNavigation
        maxDate={new Date()}
      />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & .react-datepicker.custom-calendar-class {
    border: 1px solid #f5f5f7;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.14);
    border: none;
  }

  & .react-datepicker__header {
    padding: 0;
    border-bottom: none;
    background-color: transparent;
  }

  & .react-datepicker__day-name {
    margin: 7.5px;
    margin-bottom: 12px;
    font-size: 14px;
    color: #6d55ff;
  }

  & .react-datepicker__day {
    margin: 1px;
    width: 40px;
    line-height: 38px;

    &:hover {
      border-radius: 24px;
      background-color: #f5f5f7;
    }
  }

  & .react-datepicker__day--selected {
    background-color: #f0eeff;
    color: #6d55ff;
    font-weight: 500;
    line-height: 40px;
    border-radius: 24px;
  }

  & .react-datepicker__day--keyboard-selected {
    background-color: #f0eeff;
    color: #6d55ff;
    font-weight: 500;
    line-height: 40px;
    border-radius: 24px;
  }

  & .react-datepicker__day--keyboard-selected.react-datepicker__day--today {
    background-color: #f0eeff;
    color: #6d55ff;
    font-weight: 500;
    line-height: 40px;
    border-radius: 24px;
  }

  & .react-datepicker__day--outside-month {
    color: #c4c4c4;
  }

  & .react-datepicker__month {
    margin: 0;
  }
`;

export default CustomDatePicker;
