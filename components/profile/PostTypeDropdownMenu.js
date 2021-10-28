import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import ArrowTriangleDown from '../../assets/icons/arrow_triangle_down.svg';
import { useRouter } from 'next/router';
import { route } from 'next/dist/server/router';

const PostTypeDropdownMenu = () => {
  const router = useRouter();

  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClick = (e) => {
    if (ref.current.contains(e.target)) {
      return;
    }
    setIsOpen(false);
  };

  const onOptionClick = (slug) => {
    router.push(`/profile/posts/${slug}`);
    setIsOpen(false);
  };

  const options = [
    { label: '메이커로그', slug: 'makerlogs' },
    { label: '프로덕트', slug: 'products' },
  ];

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <PostTypeDropdownMenuContainer ref={ref}>
      <DropdownHeader onClick={openMenu}>
        {router.asPath === '/profile/posts/makerlogs' && '메이커로그'}
        {router.asPath === '/profile/posts/products' && '프로덕트'}
        <ArrowTriangleDownIcon />
      </DropdownHeader>
      <DropdownListContainer $isOpen={isOpen}>
        <DropdownList>
          {options.map((option) => {
            const { label, slug } = option;
            return (
              <DropdownListItem onClick={() => onOptionClick(slug)} key={slug}>
                {label}
              </DropdownListItem>
            );
          })}
        </DropdownList>
      </DropdownListContainer>
    </PostTypeDropdownMenuContainer>
  );
};

const PostTypeDropdownMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const ArrowTriangleDownIcon = styled(ArrowTriangleDown)`
  fill: ${({ $isColor }) => ($isColor ? '#6d55ff' : '#c4c4c4')};
`;

const DropdownHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4px;
  font-size: 18px;
  line-height: 1em;
  font-weight: 500;
  box-sizing: border-box;
  &:hover {
    opacity: 0.7;
  }
`;

const DropdownListContainer = styled.div`
  width: 100%;
  transform: ${({ $isOpen }) => ($isOpen ? 'scaleY(1)' : 'scaleY(0)')};
  transform-origin: top;
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  transition: transform 0.2s cubic-bezier(0, 1, 0, 1);
  position: relative;
  z-index: 100;
`;

const DropdownList = styled.div`
  border-radius: 1rem;
  padding: 4px;
  margin: 0;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 500;
  line-height: 1em;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.12);
  width: 100%;
  position: fixed;
  top: 4px;
  background-color: #fff;
`;

const DropdownListItem = styled.div`
  list-style: none;
  margin-bottom: 4px;
  font-size: 14px;
  line-height: 1em;
  width: 100%;
  color: #8e8e8e;
  padding: 8px 8px;
  background-color: transparent;
  border-radius: 12px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  font-weight: 400;
  white-space: nowrap;
  &:last-child {
    margin-bottom: 0px;
  }

  &:hover {
    box-shadow: 0px 0px 3px #fff;
    background-color: #f5f5f7;
  }
`;

export default PostTypeDropdownMenu;
