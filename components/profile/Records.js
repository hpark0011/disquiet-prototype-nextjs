import styled from 'styled-components';

const Records = () => {
  return (
    <Container>
      <div className='tag-wrapper'>최근 기록일: 7일 전</div>
      <div className='tag-wrapper orange'>🔥 연속: 3주 연속</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-top: 8px;

  .tag-wrapper {
    display: flex;
    padding: 4px 8px;
    font-size: 12px;
    line-height: 1em;
    color: #6d55ff;
    background-color: #f0eeff;
    border-radius: 16px;
    margin-right: 6px;
  }

  .tag-wrapper.orange {
    color: #f2994a;
    background-color: #fef5ed;
  }
`;

export default Records;
