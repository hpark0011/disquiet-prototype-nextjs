import { useState, useEffect, useReducer, useRef } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const IntersectionObserver = () => {
  const node = useRef();
  const { ref, inView } = useInView();

  useEffect(() => {}, [inView]);

  return (
    <Container>
      <h1 className='title'>observe intersection animation</h1>
      <Detector inView={inView}>look closely at this!</Detector>
      <div className='gap'>this is a massive gap in between</div>
      <div className='box' ref={ref}></div>
      <div className='gap'>this is a massive gap in between</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 200vh;

  .gap {
    height: 160vh;
  }

  .box {
    width: 640px;
    height: 100px;
    background-color: blue;
  }
`;

const Detector = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #fff;
  font-weight: 500;
  width: 100%;
  position: fixed;
  top: 80px;
  z-index: 10000;
  transition: all 0.2s ease-in-out;
  height: ${({ inView }) => (inView ? '64px' : '32px')};
  background-color: ${({ inView }) => (inView ? '#6d55ff' : 'red')};
`;

export default IntersectionObserver;
