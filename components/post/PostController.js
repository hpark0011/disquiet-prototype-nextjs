import styled from 'styled-components';
import ControllerEllipsis from '../../assets/icons/controller_ellipsis.svg';
import ControllerArrowForward from '../../assets/icons/controller_arrow_forward.svg';
import ControllerArrowBackward from '../../assets/icons/controller_arrow_backward.svg';

const PostController = ({ inView, isModal }) => {
  console.log('ismodal', isModal);
  return (
    <Container $isModal={isModal} $inView={inView}>
      <div className='content-title'>디스콰이엇 메이커로그</div>
      <div className='page-number'>31 / 31</div>
      <div className='post-controller-wrapper'>
        <Button $inView={inView}>
          <ArrowBackwardIcon $inView={inView} />
        </Button>
        <Button $inView={inView}>
          <ArrowForwardIcon $inView={inView} />
        </Button>
        <Button $inView={inView}>
          <EllipsisIcon $inView={inView} />
        </Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  margin-bottom: 40px;
  position: sticky;
  top: ${({ $isModal }) => ($isModal ? '10px' : '56px')};
  transition: all 0.3s ease-in-out;
  padding: 6px 14px;
  border-radius: 32px;
  background-color: ${({ $inView }) =>
    $inView ? 'transparent' : 'rgba(0, 0, 0, 0.7);'};
  backdrop-filter: saturate(180%) blur(7px);

  .content-title {
    display: flex;
    width: 100%;
    font-weight: ${({ $inView }) => ($inView ? '500' : '400')};
    font-size: 16px;
    line-height: 1.2em;
    align-items: center;
    color: ${({ $inView }) => ($inView ? '#000' : '#fff')};
  }

  .page-number {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-family: 'Helvetica Neue';
    color: ${({ $inView }) => ($inView ? '#8e8e8e' : '#e5e5e8')};
  }

  .post-controller-wrapper {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: ${({ $inView }) =>
    $inView ? '1px solid #e5e5e8' : '1px solid transparent'};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: 0px;
  border-radius: 14px;
  margin-left: 6px;

  &:hover {
    background-color: ${({ $inView }) => ($inView ? '#f5f5f7' : '#707070')};
  }
`;

const EllipsisIcon = styled(ControllerEllipsis)`
  fill: ${({ $inView }) => ($inView ? '#c4c4c4' : '#fff')};
`;

const ArrowForwardIcon = styled(ControllerArrowForward)`
  fill: ${({ $inView }) => ($inView ? '#c4c4c4' : '#fff')};
`;

const ArrowBackwardIcon = styled(ControllerArrowBackward)`
  fill: ${({ $inView }) => ($inView ? '#c4c4c4' : '#fff')};
`;

export default PostController;
