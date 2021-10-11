import path from 'path';
import fs from 'fs/promises';
import styled from 'styled-components';
import Link from 'next/link';

const magazine = (props) => {
  return (
    <Container>
      this is magazine page
      <div className='link-wrapper'>
        {props.products.map((product) => (
          <Link href={`magazine/${product.id}`} key={product.id}>
            <div className='title'>{product.title}</div>
          </Link>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;

  .title {
    font-size: 24px;
    font-family: 'Helvetica Neue';
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    margin: 0 16px;

    &:hover {
      color: #6d55ff;
    }
  }

  .link-wrapper {
    display: flex;
    margin-top: 32px;
  }
`;

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
    },
  };
};

export default magazine;
