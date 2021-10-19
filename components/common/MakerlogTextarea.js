import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

const MakerlogTextarea = ({ register }) => {
  return (
    <Container>
      <Textarea
        placeholder={'프로덕트에 대해서 기록해보세요.'}
        {...register('makerlogTextContent', { required: true })}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 240px;
  padding-bottom: 16px;
`;

const Textarea = styled(TextareaAutosize)`
  display: block;
  width: 100%;
  height: 160px;
  background-color: transparent;
  font-size: 16px;
  line-height: 1.5em;
  resize: none;
  border: none;
  outline: none;
  font-family: 'Helvetica Neue';

  &::placeholder {
    font-size: 16px;
    color: #c4c4c4;
    line-height: 1.5em;
    font-weight: 400;
  }
`;

export default MakerlogTextarea;
