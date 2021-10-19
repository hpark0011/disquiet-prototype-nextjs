import styled from 'styled-components';
import ArrowTriangleDown from '../../assets/icons/arrow_triangle_down.svg';

const DropdownMenu = ({ label, icon, bgColor, placeholder }) => {
  return (
    <Container>
      <label className='label'>{label}</label>
      <div className={`menu ${bgColor}`}>
        <div className='current-menu'>
          {icon}
          <div className={`current-menu-title ${bgColor}`}>{placeholder}</div>
        </div>
        <ArrowTriangleDownIcon $bgColor={bgColor} />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 168px;

  .label {
    font-size: 12px;
    line-height: 1em;
    color: #8e8e8e;
    margin-bottom: 6px;
    margin-left: 6px;
  }

  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f5f5f7;
    border-radius: 12px;
    padding: 4px 4px 4px 6px;
  }

  .menu.purple {
    background-color: #f0eeff;
  }

  .menu.pink {
    background-color: #fff3f7;
  }

  .menu.gray {
    background-color: #f5f5f7;
  }

  .current-menu {
    display: flex;
    align-items: center;
  }

  .current-menu-title {
    font-size: 14px;
    line-height: 14px;
    margin-left: 4px;
    color: #707070;
  }
  .current-menu-title.purple {
    font-size: 14px;
    line-height: 14px;
    margin-left: 4px;
    color: #6d55ff;
  }
  .current-menu-title.pink {
    font-size: 14px;
    line-height: 14px;
    margin-left: 4px;
    color: #fd88aa;
  }
`;

const ArrowTriangleDownIcon = styled(ArrowTriangleDown)`
  fill: ${({ $bgColor }) =>
    $bgColor === 'purple'
      ? '#6d55ff'
      : $bgColor === 'pink'
      ? '#fd88aa'
      : '#707070'};
`;

export default DropdownMenu;
