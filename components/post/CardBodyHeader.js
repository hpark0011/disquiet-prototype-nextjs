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
    background-color: #f0eeff;
  }

  .tag.마일스톤 {
    color: #ff749c;
    background-color: #fff1f5;
  }

  .tag.아이디어 {
    color: #1bce6b;
    background-color: #e8faf0;
  }

  .tag.MVP {
    color: #fe7644;
    background-color: #fff1ec;
  }
  .tag.인사이트 {
    color: #ea4746;
    background-color: #fdeded;
  }
  .tag.문제발견 {
    color: #2f80ed;
    background-color: #eaf2fd;
  }
`;

export default CardBodyHeader;
