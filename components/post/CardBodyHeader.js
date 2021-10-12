import styled from 'styled-components';

import UpvoteButtonSmall from './UpvoteButtonSmall';

const CardBodyHeader = ({ upvote, tags, title }) => {
  return (
    <Container>
      <div className='tag-button-wrapper'>
        <div className='tags'>
          {tags.map((tag) => {
            const { id, label, slug } = tag;
            return (
              <div key={id} className={`tag ${label}`}>
                {label}
              </div>
            );
          })}
        </div>
        <UpvoteButtonSmall upvote={upvote} />
      </div>
      {title ? <div className='title'>{title}</div> : null}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 12px;

  .title {
    font-size: 18px;
    font-weight: 500;
    width: 100%;
    margin-top: 16px;
  }

  .tag-button-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }

  .tags {
    display: flex;
  }

  .tag {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 6px;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
    line-height: 1em;
    color: #6d55ff;
    background-color: #e2ddff;
  }

  .tag.마일스톤 {
    color: #ff9700;
    background-color: #ffeacc;
  }

  .tag.아이디어 {
    color: #157bff;
    background-color: #c8ddf9;
  }

  .tag.MVP {
    color: #1bce6b;
    background-color: #c9eddb;
  }
  .tag.인사이트 {
    color: #ff749c;
    background-color: #f7dbe5;
  }
  .tag.문제발견 {
    color: #ea4746;
    background-color: #f3d2d4;
  }
`;

export default CardBodyHeader;
