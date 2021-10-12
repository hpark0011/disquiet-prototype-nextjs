import styled from 'styled-components';
import Plus from '../../assets/icons/plus.svg';
import Image from 'next/image';

const AuthorInfo = ({ user }) => {
  return (
    <Container>
      <label className='label'>메이커 소개</label>
      <div className='author-card-wrapper'>
        <img className='profile-image' src={user.profileImage}></img>
        <div className='profile-description-wrapper'>
          <div className='username'>{user.name}</div>
          <div className='user-role-wrapper'>
            <span className='user-role'>{user.role}</span>{' '}
            <span className='user-role'>@{user.at}</span>
          </div>
          <div className='user-description'>
            디스콰이엇을 만들고 있습니다. 제품 만드는걸 좋아하고 무엇인가를
            끊임없이 만드는 메이커들을 좋아합니다.✌
          </div>
        </div>
        <div className='follow-button-wrapper'>
          <button className='follow-button'>
            <Plus />
            팔로우
          </button>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;

  .label {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    font-size: 16px;
    line-height: 1em;
    margin-bottom: 14px;
    font-weight: 500;
  }

  .author-card-wrapper {
    display: flex;
    padding: 16px;
    background-color: #f5f5f7;
    border-radius: 24px;
    box-sizing: content-box;
    cursor: pointer;
    width: 100%;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #fcfcfc;
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.07);
    }
  }

  .profile-image {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 64px;
    height: 64px;
    background: #fdcd66;
    margin-right: 16px;
    border-radius: 64px;
  }

  .profile-description-wrapper {
    display: flex;
    flex-direction: column;
    margin-right: 16px;
  }

  .username {
    font-size: 1rem;
    line-height: 1.4em;
    font-weight: 500;
    margin-bottom: 4px;
  }

  .user-role-wrapper {
    display: flex;
    margin-bottom: 12px;
  }

  .user-role {
    font-size: 14px;
    line-height: 14px;
    color: #8e8e8e;
    margin-right: 4px;
  }
  .user-description {
    font-size: 14px;
    line-height: 1.5em;
  }
  .follow-button-wrapper {
    display: flex;
    align-items: center;
    width: 68px;
  }
  .follow-button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #6d55ff;
    padding: 4px 10px 4px 4px;
    border-radius: 24px;
    cursor: pointer;
    border: none;
    width: 68px;
    color: #fff;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export default AuthorInfo;
