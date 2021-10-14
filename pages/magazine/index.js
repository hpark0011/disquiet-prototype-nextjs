import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MakerlogContent from '../../components/post/MakerlogContent';

Modal.setAppElement('#modal-root');

const Magazine = ({ makerlogs }) => {
  const router = useRouter();

  const closeModal = () => {
    router.push('/magazine');
  };

  console.log('current path:::', router.pathname);
  console.log('current path query:::', router.query.id);

  return (
    <Container>
      <h1>Magazine</h1>
      {makerlogs &&
        makerlogs.map((makerlog) => {
          const { id, title, content } = makerlog;
          return (
            <>
              <Link
                key={id}
                href={`/magazine/?id=${id}`}
                as={`/magazine/makerlog/${id}`}
              >
                <a className='makerlog-wrapper'>
                  <div className='title'>{title}</div>
                </a>
              </Link>
              <StyledModal
                isOpen={!!router.query.id}
                onRequestClose={closeModal}
                key={id}
              >
                <MakerlogContent title={title} content={content} />
              </StyledModal>
            </>
          );
        })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: 64px;
  padding: 16px;
  width: 1120px;

  h1 {
    font-family: 'Helvetica Neue';
    font-size: 80px;
  }

  .makerlog-wrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    padding: 16px;
    border-radius: 24px;
    background-color: #fff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #f0eeff;
    }
  }

  .title {
    font-size: 20px;
    font-weight: 500;
  }

  .content {
    font-size: 14px;
    line-height: 1.6em;
    margin-top: 12px;
  }

  .button {
    margin-top: 16px;
    padding: 12px 16px;
    font-size: 16px;
    line-height: 1em;
    background-color: #f0eeff;
    color: #6d55ff;
    border: none;
    text-transform: uppercase;
  }
`;

const StyledModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  z-index: 100000;
`;

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:4000/makerlogs');
  const data = await res.json();

  return {
    props: {
      makerlogs: data,
    },
  };
};

export default Magazine;
