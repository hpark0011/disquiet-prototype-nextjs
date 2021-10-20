import styled from 'styled-components';
import CalendarToday from '../../assets/icons/calendar_today.svg';
import CalendarNextMonth from '../../assets/icons/calendar_next_month.svg';
import CalendarPrevMonth from '../../assets/icons/calendar_prev_month.svg';
import startOfDay from 'date-fns/startOfDay';

const CalendarHeader = ({
  date,
  changeYear,
  changeMonth,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}) => {
  function getStartOfToday() {
    return startOfDay(new Date());
  }

  return (
    <CalendarHeaderWrapper>
      <div className='date-wrapper'>
        <div className='display-year'>{date.getFullYear()},</div>
        <div className='display-month'>{date.getMonth() + 1}월</div>
      </div>

      <CalendarNavigatorWrapper>
        {/* <CalendarNavigatorButton onClick={(e) => getStartOfToday()}>
          <CalendarTodayIcon />
        </CalendarNavigatorButton> */}
        <CalendarNavigatorButton
          onClick={decreaseMonth}
          disabled={prevMonthButtonDisabled}
        >
          <CalendarPrevMonthIcon />
        </CalendarNavigatorButton>
        <CalendarNavigatorButton
          onClick={increaseMonth}
          disabled={nextMonthButtonDisabled}
        >
          <CalendarNextMonthIcon />
        </CalendarNavigatorButton>
      </CalendarNavigatorWrapper>
    </CalendarHeaderWrapper>
  );
};

const CalendarHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  align-items: center;
  padding: 0px 8px 0px 12px;
  margin-top: 8px;
  margin-bottom: 8px;

  .date-wrapper {
    display: flex;
    font-family: 'Spoqa Han Sans Neo';
    font-size: 16px;
    color: #000;
    font-weight: 500;
  }

  .display-year {
    margin-right: 4px;
  }

  .display-month {
  }
`;

const CalendarNavigatorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CalendarNavigatorButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
`;

const CalendarTodayIcon = styled(CalendarToday)`
  fill: #c4c4c4;
  transition: all 0.2s ease-in-out;
  ${CalendarNavigatorButton}:hover & {
    fill: #6d55ff;
  }
`;
const CalendarNextMonthIcon = styled(CalendarNextMonth)`
  fill: #c4c4c4;
  transition: all 0.2s ease-in-out;
  ${CalendarNavigatorButton}:hover & {
    fill: #6d55ff;
  }
`;
const CalendarPrevMonthIcon = styled(CalendarPrevMonth)`
  fill: #c4c4c4;
  transition: all 0.2s ease-in-out;
  ${CalendarNavigatorButton}:hover & {
    fill: #6d55ff;
  }
`;

export default CalendarHeader;
