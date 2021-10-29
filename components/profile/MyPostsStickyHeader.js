import styled from 'styled-components';
import Link from 'next/link';
import PostTypeDropdownMenu from './PostTypeDropdownMenu';
import ArrowTriangleDown from '../../assets/icons/arrow_triangle_down.svg';
import { useRouter } from 'next/router';

const MyPostsStickyHeader = ({ onOpenModal }) => {
  const router = useRouter();

  return (
    <MyPostsStickyHeaderContainer>
      <div className='posts-header'>
        <PostTypeDropdownMenu />
        <Link href={router.asPath}>
          <a className='button' onClick={onOpenModal}>
            새 포스트
          </a>
        </Link>
      </div>
      <div className='filters'>
        <div className='filter'>
          2021년
          <ArrowTriangleDownIcon $isColor />
        </div>
        <div className='filter'>
          전체
          <ArrowTriangleDownIcon $isColor />
        </div>
      </div>
    </MyPostsStickyHeaderContainer>
  );
};

const MyPostsStickyHeaderContainer = styled.div`
  .posts-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const ArrowTriangleDownIcon = styled(ArrowTriangleDown)`
  fill: ${({ $isColor }) => ($isColor ? '#6d55ff' : '#c4c4c4')};
`;

export default MyPostsStickyHeader;
