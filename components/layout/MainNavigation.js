import styled from 'styled-components';
import Link from 'next/link';
import Search from './Search';
import Image from 'next/image';
import Logo from '../../public/logo.svg';
import NewPostIcon from '../../assets/icons/new_post.svg';
import BellIcon from '../../assets/icons/bell_fill.svg';
import profile_photo from '../../assets/images/profile-photo.jpg';
import CreateNewPostModal from '../modal/CreateNewPostModal';
import useModal from '../../hook/useModal';

const MainNavigation = () => {
  const [isModalOpen, onOpenModal, onCloseModal] = useModal();

  return (
    <Container>
      <div className='nav-container'>
        <div className='left-cluster-wrapper'>
          <Link href='/'>
            <a className='logo'>
              <Logo />
            </a>
          </Link>
          <Search />
        </div>
        <nav className='nav-menu'>
          <Link href='/about'>
            <a className='nav-item'>사이트 소개</a>
          </Link>
          <Link href='/magazine'>
            <a className='nav-item'>매거진</a>
          </Link>
          <div className='notification-button'>
            <BellIcon />
          </div>
          <Link href='/' as='/create-post'>
            <a className='button--cta' onClick={onOpenModal}>
              <NewPostIcon />
              <div className='text'>새 포스트</div>
            </a>
          </Link>
          <Link href='/profile/posts/makerlogs'>
            <a className='profile-button'>
              <Image
                alt='profile photo'
                src={profile_photo}
                width='36'
                height='36'
              />
            </a>
          </Link>
        </nav>
      </div>
      <CreateNewPostModal
        isModalOpen={isModalOpen}
        onCloseModal={onCloseModal}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.72);
  backdrop-filter: saturate(180%) blur(20px);
  position: fixed;
  z-index: 10;
  top: 0;
  border-bottom: 1px solid #e5e5e8;

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1120px;
    width: 100%;
  }

  .left-cluster-wrapper {
    display: flex;
    align-items: center;
  }

  .logo {
    margin-top: 4px;
  }

  .nav-menu {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .nav-item {
    margin: 2px 0.5rem 0 0.5rem;
    font-size: 0.875rem;
    line-height: 1em;
    color: #707070;
    padding: 16px 0px 14px 0px;
    border-bottom: 2px solid rgba(0, 0, 0, 0);
    transition: all 0.2s ease-in-out;

    &:hover {
      color: #6d55ff;
      border-bottom: 2px solid #6d55ff;
    }
  }

  .button--cta {
    display: flex;
    align-items: center;
    margin: 0 8px 0 6px;

    padding-right: 12px;
    border-radius: 32px;
    color: #6d55ff;
    font-weight: 500;
    background-color: #f0eeff;
    border: 1px solid #f0eeff;
    transition: all 0.2s ease-in-out;

    &:hover {
      border: 1px solid #6d55ff;
      box-shadow: rgb(109 85 255 / 40%) 0px 0px 0px 3px;
    }
  }

  .text {
    padding-top: 1px;
    font-size: 13px;
    line-height: 13px;
  }

  .notification-button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 8px;
    padding: 4px;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #f5f5f7;
      border-radius: 24px;
    }
  }

  .profile-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    border-radius: 24px;
    overflow: hidden;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export default MainNavigation;
