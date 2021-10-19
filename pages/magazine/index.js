import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import MagazineFill from '../../assets/icons/magazine_fill.svg';
import Globe from '../../assets/icons/globe.svg';
import Calendar from '../../assets/icons/calendar.svg';
import DropDownMenu from '../../components/magazine/DropDownMenu';
import MultiSelectDropDownMenu from '../../components/magazine/MultiSelectDropDownMenu';
import ToggleButton from '../../components/magazine/ToggleButton';

const MagazinePage = ({ makerlogs }) => {
  const router = useRouter();

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  const [value, setValue] = useState(null);
  const [secondValue, setSecondValue] = useState(null);
  const [thirdValue, setThirdValue] = useState(null);

  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <MagazinePageContainer>
      <FormContainer onSubmit={onSubmitHandler}>
        <div className='dropdown-menus'>
          <div className='dropdown-menu-wrapper'>
            <DropDownMenu
              icon={<MagazineFillIcon />}
              label={'태그'}
              bgColor={'purple'}
              onChange={(v) => setValue(v)}
              placeholder={'디자인'}
              value={value}
              options={['디자인', '아이디어', '개발']}
            />
          </div>
          <div className='dropdown-menu-wrapper'>
            <DropDownMenu
              icon={<MagazineFillIcon />}
              label={'태그'}
              bgColor={'purple'}
              onChange={(v) => setSecondValue(v)}
              placeholder={'디자인'}
              value={secondValue}
              options={['디자인', '아이디어', '개발']}
            />
          </div>
          <div className='dropdown-menu-wrapper'>
            <DropDownMenu
              icon={<MagazineFillIcon />}
              label={'태그'}
              bgColor={'purple'}
              onChange={(v) => setThirdValue(v)}
              placeholder={'디자인'}
              value={thirdValue}
              options={['디자인', '아이디어', '개발']}
            />
          </div>
        </div>
        <div className='multi-select-dropdown-menus'>
          <MultiSelectDropDownMenu
            onChange={(v) => setSelectedItems(v)}
            placeholder={'일지 태그:'}
          />
          <MultiSelectDropDownMenu
            onChange={(v) => setSelectedItems(v)}
            placeholder={'토픽:'}
            last={true}
          />
        </div>
        <div className='toggle-wrapper'>
          <ToggleButton label={'댓글 허용'} />
        </div>
      </FormContainer>
    </MagazinePageContainer>
  );
};

const MagazinePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1120px;
  margin: auto;
  margin-top: 72px;
  background-color: #fff;
  height: 50vh;
  align-items: center;
  justify-content: flex-start;
  padding-top: 80px;

  .dropdown-menus {
    display: flex;
    margin-top: 32px;
  }

  .dropdown-menu-wrapper {
    margin: 0px 12px;
  }

  .title {
    font-weight: 600;
    color: #6d55ff;
    margin-bottom: 16px;
  }

  .makerlog-item {
    font-size: 32px;
    line-height: 1.4em;
  }

  .multi-select-dropdown-menus {
    display: flex;
    flex-direction: column;
    margin-top: 32px;
  }

  .toggle-wrapper {
    display: flex;
    margin-top: 32px;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const MagazineFillIcon = styled(MagazineFill)`
  fill: #6d55ff;
`;

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:4000/makerlogs');
  const makerlogs = await res.json();

  return {
    props: {
      makerlogs,
    },
  };
};

export default MagazinePage;
