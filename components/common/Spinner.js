import styled from 'styled-components';
import Asterisk from '../../assets/icons/asterisk_black.svg';

const Spinner = () => {
  return (
    <SpinnerWrapper>
      <AsteriskIcon />
      <SpinnerText>Loading</SpinnerText>
    </SpinnerWrapper>
  );
};

const SpinnerWrapper = styled.div`
  width: 100%;
  z-index: 1;
  margin: 1rem 0;
  text-align: center;
`;

const AsteriskIcon = styled(Asterisk)`
  animation: infinite-spin 1.5s infinite;

  @keyframes infinite-spin {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(450deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(900deg);
    }
  }
`;

const SpinnerText = styled.div`
  font-size: 14px;
  line-height: 1em;
  color: ${({ theme }) => theme.colors.gray_3};
  font-weight: 400;
  margin-top: 6px;
`;

export default Spinner;
