import styled from 'styled-components';
import { useState, useEffect } from 'react';

const ToggleButton = ({ label, toggleItem, setToggleItem }) => {
  const [toggle, setToggle] = useState(toggleItem);

  const onToggleClick = () => {
    setToggle((prev) => !prev);
  };

  useEffect(() => {
    setToggleItem(toggle);
  }, [toggle]);

  return (
    <ToggleButtonContainer>
      <div className='toggle-label'>{label}</div>
      <ToggleSurface onClick={onToggleClick} toggle={toggle}>
        <ToggleCircle toggle={toggle} />
      </ToggleSurface>
    </ToggleButtonContainer>
  );
};

const ToggleButtonContainer = styled.div`
  display: flex;
  align-items: center;

  .toggle-label {
    font-size: 13px;
    color: #8e8e8e;
    margin-right: 8px;
  }
`;

const ToggleSurface = styled.div`
  position: relative;
  width: 40px;
  height: 24px;
  left: 0px;
  top: 0px;
  background: ${({ toggle }) => (toggle ? '#6d55ff' : '#e5e5e8')};
  border-radius: 75px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  z-index: 0;
`;

const ToggleCircle = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  left: 2px;
  /* right: ${({ toggle }) => (toggle ? null : '2px')}; */
  top: calc(50% - 20px / 2);
  background: #ffffff;
  box-shadow: ${({ toggle }) =>
    toggle
      ? ' 0px 0px 4px rgba(0, 0, 0, 0.6)'
      : ' 0px 0px 4px rgba(0, 0, 0, 0.1)'};
  border-radius: 32px;
  transform: ${({ toggle }) => (toggle ? 'translateX(16px)' : null)};
  transition: all 0.2s ease-in-out;
  z-index: 0;
`;

export default ToggleButton;
