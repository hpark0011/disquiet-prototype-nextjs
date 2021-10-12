import styled from 'styled-components';

const CardHeader = ({ user, noMargin, lightFont, date }) => {
  return (
    <Container noMargin={noMargin}>
      <img className='profile-image' src={user.profileImage} />
      <div className='description-wrapper'>
        <PostDescription lightFont={lightFont}>
          <span className='username'>{user.name}</span>
          님이 &nbsp;
          <span className='post-type'>메이커일지</span>를 공유하였습니다.
        </PostDescription>
        <ProfileDescription lightFont={lightFont}>
          <div>{user.role}</div> &nbsp; @{user.at}{' '}
          <div className='divider'>•</div>
          <div className='date'>{date}</div>
        </ProfileDescription>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ noMargin }) => (noMargin ? '0px' : '12px')};

  .profile-image {
    width: 40px;
    height: 40px;
    background-color: #f5f5f7;
    border-radius: 4rem;
    margin-right: 12px;
  }

  .description-wrapper {
    display: flex;
    flex-direction: column;
  }

  .post-description {
    display: flex;
    margin-bottom: 6px;
    font-size: 14px;
    line-height: 14px;
  }

  .username {
    font-weight: 500;
  }

  .post-type {
    color: #00ac32;
    font-weight: 500;
  }

  .profile-description {
    display: flex;
    font-size: 12px;
    line-height: 12px;
    color: #8e8e8e;
  }

  .divider {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 4px;
  }
`;

const PostDescription = styled.div`
  display: flex;
  margin-bottom: 6px;
  font-size: 14px;
  line-height: 14px;
  color: ${({ lightFont }) => (lightFont ? '#fff' : '#000')};
`;

const ProfileDescription = styled.div`
  display: flex;
  font-size: 12px;
  line-height: 12px;
  color: ${({ lightFont }) => (lightFont ? '#e5e5e8' : '#8e8e8e')};

  .date {
    font-family: 'Helvetica Neue';
  }
`;

export default CardHeader;
