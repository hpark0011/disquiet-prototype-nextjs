import styled from 'styled-components';
import ArrowBackward from '../../assets/icons/arrow_backward.svg';
import DropdownMenu from './DropdownMenu';
import MagazineFill from '../../assets/icons/magazine_fill.svg';
import Globe from '../../assets/icons/globe.svg';
import Calendar from '../../assets/icons/calendar.svg';
import MakerlogTextarea from './MakerlogTextarea';
import MakerlogTagSelector from './MakerlogTagSelector';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

const CreateMakerLog = ({ pageCount, setPageCount, onClose }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onBackwardArrowClick = () => {
    setPageCount(pageCount - 1);
    router.push('/', '/create-post');
  };

  const onSubmit = (data) => {
    reset();
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <div className='header'>
        <ArrowBackwardIcon onClick={onBackwardArrowClick} />
        <h2 className='modal-title'>메이커일지 기록하기</h2>
      </div>
      <div className='settings-wrapper'>
        <DropdownMenu
          label={'관련 스토리'}
          icon={<MagazineFillIcon />}
          bgColor={'purple'}
          placeholder={'디스콰이엇'}
        />
        <DropdownMenu
          label={'날짜'}
          icon={<CalendarIcon />}
          bgColor={'pink'}
          placeholder={'10월 1일, 2021'}
        />
        <DropdownMenu
          label={'공개 범위'}
          icon={<GlobeIcon />}
          bgColor={'gray'}
          placeholder={'전체 공개'}
        />
      </div>
      <MakerlogTextarea register={register} />
      <MakerlogTagSelector />
      <div className='footer'>
        <SubmitButton type='submit'>기록하기</SubmitButton>
      </div>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  .header {
    display: flex;
    position: relative;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #f5f5f7;
    padding-bottom: 1rem;
    margin-bottom: 12px;
  }
  .modal-title {
    font-size: 20px;
    font-weight: 500;
    margin: 0;
  }
  .settings-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 12px;
    border-bottom: 1px solid #f5f5f7;
    margin-bottom: 12px;
  }
  .footer {
    margin-top: 16px;
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
  .button {
    font-size: 14px;
    line-height: 14px;
    padding: 9px 10px;
    border-radius: 10px;
    background-color: #6d55ff;
    color: #fff;
    border: none;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
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

const MagazineFillIcon = styled(MagazineFill)`
  fill: #6d55ff;
`;

const GlobeIcon = styled(Globe)`
  fill: #c4c4c4;
`;

const CalendarIcon = styled(Calendar)`
  fill: #fd88aa;
`;

const SubmitButton = styled.button`
  color: #fff;
  background-color: #6d55ff;
  border: none;
  font-size: 14px;
  line-height: 1em;
  padding: 8px 10px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export default CreateMakerLog;
