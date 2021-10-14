import styled from 'styled-components';
import MyCard from './MyCard';

const myProfile = {
  id: 'hpark',
  name: 'Hyunsol',
  profileImage: 'https://randomuser.me/api/portraits/men/84.jpg',
  role: '디자이너',
  at: '디스콰이엇',
};

const MyMakerlogs = ({ myMakerlogs }) => {
  return (
    <MyMakerlogsContainer>
      {!myMakerlogs && <div>loading...</div>}
      {myMakerlogs &&
        myMakerlogs.map((myMakerlog) => {
          const { id, title, content, date, tags, upvote } = myMakerlog;
          const lastItem = myMakerlogs.at(-1).id;

          return (
            <div key={id} className='makerlog'>
              <div className='date'>{date}</div>
              <div className='timeline-graph'>
                <Line $lastItem={lastItem === id} />
              </div>
              <div className='card-wrapper'>
                <div className='tags'>
                  {tags.map((tag) => {
                    const { id, label, slug } = tag;
                    return (
                      <Tag slug={slug} key={id} className='tag'>
                        {label}
                      </Tag>
                    );
                  })}
                </div>
                <MyCard
                  id={id}
                  title={title}
                  content={content}
                  user={myProfile}
                  tags={tags}
                  upvote={upvote}
                />
              </div>
            </div>
          );
        })}
    </MyMakerlogsContainer>
  );
};

const MyMakerlogsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .makerlog {
    display: flex;
    width: 100%;
  }

  .date {
    display: flex;
    justify-content: flex-end;
    color: #8e8e8e;
    font-size: 12px;
    line-height: 1em;
    margin-right: 8px;
    width: 60px;
    font-family: 'Helvetica Neue';
  }

  .timeline-graph {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 12px;
    background-color: transparent;
    position: relative;
  }

  .card-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 16px;
    padding-bottom: 40px;
    width: 100%;
  }

  .tags {
    display: flex;
    margin-top: -4px;
    margin-bottom: 12px;
  }
`;

const Line = styled.div`
  width: 2px;
  height: 100%;
  background-color: ${({ $lastItem }) =>
    $lastItem ? 'transparent' : '#f5f5f7'};

  &:before {
    content: '';
    display: flex;
    width: 6px;
    height: 6px;
    background-color: #fff;
    border-radius: 32px;
    border: 3px solid #20ab98;
    position: absolute;
    float: left;
    top: 0;
    left: -1px;
  }
`;

const Tag = styled.div`
  font-size: 12px;
  line-height: 1em;
  padding: 4px 8px;
  background: #e9f7f5;
  border-radius: 32px;
  color: #20ab98;
  margin-right: 6px;
`;

export default MyMakerlogs;
