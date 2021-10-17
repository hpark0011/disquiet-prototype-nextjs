import styled from 'styled-components';
import { useState } from 'react';
import { useRouter } from 'next/router';

const MakerlogListPage = ({ makerlogList }) => {
  const [makerlogs, setMakerlogs] = useState(makerlogList);
  const router = useRouter();

  const onFilterClick = async (topic) => {
    const response = await fetch(
      `http://localhost:4000/makerlogs?topics=${topic}`
    );
    const data = await response.json();
    setMakerlogs(data);
    router.push(`/about?topics=${topic}`, undefined, { shallow: true });
  };

  return (
    <Container>
      <IntersectionObserver />
      <h1>MAKERLOG LIST</h1>
      <FilterWrapper>
        <Filter
          onClick={() => {
            onFilterClick('game');
          }}
          active={router.query.topics === 'game'}
        >
          Game
        </Filter>
        <Filter
          onClick={() => {
            onFilterClick('lifestyle');
          }}
          active={router.query.topics === 'lifestyle'}
        >
          Lifestyle
        </Filter>
        <Filter
          onClick={() => {
            onFilterClick('social');
          }}
          active={router.query.topics === 'social'}
        >
          Social
        </Filter>
      </FilterWrapper>
      {makerlogs.length > 0 ? (
        makerlogs.map((makerlog) => {
          const { title, id, content } = makerlog;
          return (
            <List className='list' key={id}>
              <div className='label'>
                {title}: {content}
              </div>
              <Underline />
            </List>
          );
        })
      ) : (
        <div>...loading</div>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 1120px;
  margin: auto;
  display: flex;
  margin-top: 80px;
  flex-direction: column;
  align-items: flex-start;
  h1 {
    font-size: 16px;
    font-weight: 500;
    color: #6d55ff;
    margin-bottom: 24px;
  }

  .label {
    font-size: 32px;
    font-weight: 600;
    line-height: 1.6em;
    padding: 16px 0px;
    border-bottom: 1px solid black;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Underline = styled.div`
  position: absolute;
  bottom: 16px;
  width: 0%;
  height: 8px;
  background-color: #6d55ff;
  transition: all 0.35s ease-in-out;

  ${List}:hover & {
    width: 100%;
  }
`;

const FilterWrapper = styled.div`
  display: flex;
`;

const Filter = styled.div`
  padding: 4px 12px;
  background-color: ${({ active }) => (active ? '#6d55ff' : '#f5f5f7')};
  color: ${({ active }) => (active ? '#fff' : '#000')};
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;

  &:hover {
    background-color: #6d55ff;
    color: #fff;
  }
`;

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { topics } = query;

  console.log('query:::', context);

  const queryString = topics ? `?topics=${topics}` : '';

  const response = await fetch(`http://localhost:4000/makerlogs${queryString}`);

  const data = await response.json();

  console.log('data:::', data);
  return {
    props: {
      makerlogList: data,
    },
  };
};

export default MakerlogListPage;
