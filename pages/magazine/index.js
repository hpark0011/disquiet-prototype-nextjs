import styled from 'styled-components';
import Link from 'next/link';
import Modal from 'react-modal';
import MagazineContent from '../../components/magazine/MagazineContent';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

Modal.setAppElement('#__next');

const MagazinePage = ({ makerlogs }) => {
  const router = useRouter();

  console.log('router::;', router.query);

  return (
    <MagazinePageContainer>
      <div className='title'>list of makerlog</div>
      {makerlogs.map((makerlog) => {
        const { id, title } = makerlog;
        return (
          <Fragment key={id}>
            <Link href={`/magazine?magazineId=${id}`} as={`/magazine/${id}`}>
              <a className='makerlog-item'>
                {id} {title}
              </a>
            </Link>
          </Fragment>
        );
      })}
      <Modal
        isOpen={!!router.query.magazineId}
        onRequestClose={() => {
          router.push('/magazine');
        }}
      >
        <MagazineContent magazineId={router.query.magazineId} />
      </Modal>
    </MagazinePageContainer>
  );
};

const MagazinePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1120px;
  margin: auto;
  margin-top: 72px;

  .title {
    font-weight: 600;
    color: #6d55ff;
    margin-bottom: 16px;
  }

  .makerlog-item {
    font-size: 32px;
    line-height: 1.4em;
  }
`;

const StyledModal = styled(Modal)`
  .ReactModal__Overlay--after-open {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 100;
    /* background-color: rgba(0, 0, 0, 0.85);
    backdrop-filter: saturate(180%) blur(7px);
    -webkit-tap-highlight-color: transparent; */
    overflow: scroll;
    background-color: red;
  }
`;

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:4000/makerlogs');
  const makerlogs = await res.json();

  return {
    props: {
      makerlogs,
    },
  };
};

export default MagazinePage;
