import { useState, useEffect } from 'react';
import styled from 'styled-components';
import useSWR from 'swr';

const fetcher = async () => {
  const response = await fetch('http://localhost:4000/makerlogs');
  const data = await response.json();
  return data;
};

const Dashboard = () => {
  const { data, error } = useSWR('dashboard', fetcher);

  error && 'an error has occured';
  return (
    <Container>
      hello
      {data &&
        data.map((makerlog) => {
          const { id, title } = makerlog;
          return <div key={id}>{title}</div>;
        })}
      {!data && <Container>loading...</Container>}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Dashboard;
