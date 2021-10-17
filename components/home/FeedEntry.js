import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import CreateNewPost from './CreateNewPost';
import profile_photo from '../../assets/images/profile-photo.jpg';
import Records from '../profile/Records';

const FeedEntry = () => {
  return (
    <Container>
      <Link href='/profile'>
        <a className='profile-button'>
          <Image
            alt='profile-image'
            src={profile_photo}
            width='48'
            height='48'
          />
        </a>
      </Link>
      <div className='right-cluster-wrapper'>
        <CreateNewPost />
        <Records />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;

  .profile-button {
    border-radius: 2rem;
    overflow: hidden;
    margin-right: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .right-cluster-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export default FeedEntry;
