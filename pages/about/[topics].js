import styled from 'styled-components';

const MakerlogsByCategory = ({ makerlogs }) => {
  return (
    <Container>
      {makerlogs.map((makerlog) => {
        const { title, id } = makerlog;
        return <div key={id}>{title}</div>;
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const { topics } = params;

  const response = await fetch(
    `http://localhost:4000/makerlogs?topics=${topics}`
  );
  const data = await response.json();

  return {
    props: {
      makerlogs: data,
    },
  };
};

export default MakerlogsByCategory;
