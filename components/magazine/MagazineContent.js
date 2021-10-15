import styled from 'styled-components';
import Image from 'next/image';
import useSWR from 'swr';

const fetcher = async (magazineId) => {
  const res = await fetch(`http://localhost:4000/makerlogs/${magazineId}`);
  const data = await res.json();
  console.log('magazine dataasdf', data);
  return data;
};

const MagazineContent = ({ magazineId }) => {
  const { data, error } = useSWR(magazineId, fetcher);

  if (error) return <Container>an error occured</Container>;
  return (
    <Container>
      {!data && <div>Loading...</div>}
      {data && (
        <>
          <div className='makerlog-header'>
            <div className='title'>{data.title}</div>
            <div className='makerlog-date-user-wrapper'>
              <div className='date'>{data.date}</div>
              <div className='username'>{data.user.name}</div>
              <div className='profile-image'>
                <Image
                  src={data.user.profileImage}
                  width='48'
                  height='48'
                  alt='profile-image'
                />
              </div>
            </div>
          </div>
          <div className='makerlog-body'>{data.content}</div>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1120px;
  margin: auto;
  margin-top: 72px;

  .makerlog-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  .makerlog-date-user-wrapper {
    display: flex;
  }

  .title {
    font-size: 14px;
  }

  .username {
    font-size: 14px;
    margin-left: 8px;
  }

  .profile-image {
    width: 48px;
    height: 48px;
    border-radius: 48px;
    overflow: hidden;
    margin-left: 8px;
  }

  .makerlog-body {
    font-size: 16px;
    line-height: 1.6em;
    margin-top: 24px;
  }
`;

export default MagazineContent;
