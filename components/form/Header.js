import styled from 'styled-components';
import DatePicker from '../calendar/DatePicker';
import ArrowBackward from '../../assets/icons/arrow_backward.svg';

const Header = ({ onBackwardArrowClick, startDate, setStartDate }) => {
  return (
    <HeaderContainer>
      <ArrowBackwardIcon onClick={onBackwardArrowClick} />
      <DatePicker startDate={startDate} setStartDate={setStartDate} />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
  margin-bottom: 12px;
`;

const ArrowBackwardIcon = styled(ArrowBackward)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0px;
  background-color: transparent;
  border-radius: 2rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f7;
  }
`;

export default Header;
