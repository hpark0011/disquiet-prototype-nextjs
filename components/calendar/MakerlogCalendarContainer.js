import styled from 'styled-components';

const MakerlogCalendarContainer = ({ className, children }) => {
  return (
    <OuterCalendarContainer>
      <CalendarContainer className={className}>{children}</CalendarContainer>
    </OuterCalendarContainer>
  );
};

const OuterCalendarContainer = styled.div`
  background-color: red;
  padding: 16px;
`;

const CalendarContainer = styled.div`
  display: flex;
  background-color: red;
  padding: 1rem;
  border: 8px soild red;
`;

export default MakerlogCalendarContainer;
