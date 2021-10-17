import styled from 'styled-components';
import MyCard from './MyCard';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
                <Link
                  href={`/profile/posts/makerlogs/?makerlogId=${id}`}
                  as={`/${myProfile.name}/makerlog/${id}`}
                  scroll={false}
                  shallow
                  passHref
                >
                  <a className='link-wrapper'>
                    <MyCard id={id} title={title} content={content} />
                  </a>
                </Link>
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

  .link-wrapper {
    width: 100%;
  }
`;

const Line = styled.div`
  width: 2px;
  height: 100%;
  background-color: ${({ $lastItem }) =>
    $lastItem ? 'transparent' : '#ebebed'};

  &:before {
    content: '';
    display: flex;
    width: 6px;
    height: 6px;
    background-color: #fff;
    border-radius: 32px;
    border: 3px solid #1bce6b;
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
  background: #d4efe2;
  border-radius: 32px;
  color: #1bce6b;
  margin-right: 6px;
`;

export default MyMakerlogs;
