import styled from 'styled-components';
import Image from 'next/image';
import profile_photo from '../../assets/images/profile-photo.jpg';
import Records from './Records';

const ProfileDetailInfo = () => {
  return (
    <Container>
      <div className='profile-image-wrapper'>
        <div className='profile-image'>
          <Image
            alt='profile photo'
            src={profile_photo}
            width='96px'
            height='96px'
          />
        </div>
      </div>
      <div className='profile-content-wrapper'>
        <div className='profile-content-header'>
          <div className='username-role-wrapper'>
            <div className='username'>박현솔</div>
            <div className='role-wrapper'>
              <span className='role'>Designer</span>
              <span className='role'>@disquiet</span>
            </div>
          </div>
          <div className='buttons-wrapper'></div>
        </div>
        <div className='profile-tags'>
          <Records />
        </div>
        <div className='profile-description'>
          디스콰이엇을 만들고 있습니다. 제품 만드는걸 좋아하고 무엇인가를
          끊임없이 만드는 메이커들을 좋아합니다.✌
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;

  .profile-image-wrapper {
    margin-right: 20px;
  }

  .profile-image {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 96px;
    width: 96px;
    height: 96px;
    overflow: hidden;
  }

  .profile-content-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .profile-content-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
  }

  .username-role-wrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 4px;
  }

  .username {
    font-size: 20px;
    line-height: 1em;
    font-weight: 500;
    margin-bottom: 8px;
  }

  .role-wrapper {
    display: flex;
    align-items: center;
  }

  .role {
    font-size: 14px;
    line-height: 1em;
    color: #8e8e8e;
    margin-right: 4px;
  }

  .profile-tags {
    margin-bottom: 14px;
  }

  .profile-description {
    font-size: 14px;
    line-height: 1.6em;
    word-break: keep-all;
  }
`;

export default ProfileDetailInfo;
