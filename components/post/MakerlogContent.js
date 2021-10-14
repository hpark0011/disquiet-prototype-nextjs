import styled from 'styled-components';

const MakerlogContent = ({ title, content }) => {
  return (
    <Container>
      <div className='title'>{title}</div>
      <div className='content'>{content}</div>
    </Container>
  );
};

const Container = styled.div`
  .title {
    font-size: 32px;
  }

  .content {
    margin-top: 1rem;
    line-height: 1.6em;
  }
`;

export default MakerlogContent;
