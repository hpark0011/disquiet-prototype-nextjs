import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ArrowTriangleRight from '../../assets/icons/arrow_triangle_right.svg';

const Categories = ({ topics }) => {
  const [isOpen, setIsOpen] = useState(true);

  const onCategoryClick = () => {
    setIsOpen(!isOpen);
  };

  const router = useRouter();

  return (
    <Container>
      <div className='category' onClick={onCategoryClick}>
        <ArrowTriangleRightIcon $isOpen={isOpen} />
        <div className='category-label'>Topics</div>
      </div>
      <CategoryItems $isOpen={isOpen}>
        <Link href={{ pathname: '/' }}>
          <CategoryItem
            $isOpen={isOpen}
            isActive={router.query.topic === undefined ? 'active' : ''}
          >
            🌕 전체
          </CategoryItem>
        </Link>
        {topics.map((topic) => {
          const { id, topicName, queryString } = topic;
          return (
            <Link
              key={id}
              href={{ pathname: '/', query: { topic: `${queryString}` } }}
            >
              <CategoryItem
                $isOpen={isOpen}
                isActive={router.query.topic === queryString ? 'active' : ''}
              >
                {topicName}
              </CategoryItem>
            </Link>
          );
        })}
      </CategoryItems>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  min-width: 176px;

  .category {
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 10px;
    padding: 2px 2px 2px 0px;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #f5f5f7;
    }
  }

  .category-label {
    font-family: 'Helvetica Neue', Helvetica;
    font-weight: 400;
    font-size: 16px;
    line-height: 1em;
    color: #333;
  }
`;

const CategoryItems = styled.div`
  margin-top: 4px;
  max-height: ${({ $isOpen }) => ($isOpen ? '1000px' : '0px')};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
`;

const CategoryItem = styled.a`
  display: flex;
  align-items: center;
  background-color: ${({ isActive }) =>
    isActive === 'active' ? '#f5f5f7' : 'rgba(0, 0, 0, 0)'};
  border-radius: 10px;
  margin: 2px 0px;
  padding: 7px 7px 7px 24px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1em;
  color: #707070;
  cursor: pointer;
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f5f5f7;
  }
`;

const ArrowTriangleRightIcon = styled(ArrowTriangleRight)`
  fill: #c4c4c4;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(90deg)' : 'rotate(0deg)')};
  transition: all 0.3s ease-in-out;
`;

export default Categories;
