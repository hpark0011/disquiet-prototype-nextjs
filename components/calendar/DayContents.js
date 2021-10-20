import styled from 'styled-components';

const DayContents = (day, date) => {
  return <DayWrapper>{day}</DayWrapper>;
};

const DayWrapper = styled.span`
  font-size: 16px;
`;

export default DayContents;
