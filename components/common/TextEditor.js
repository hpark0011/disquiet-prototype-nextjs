import styled from 'styled-components';
import { TrixEditor } from 'react-trix';

const TextEditor = () => {
  const handleChange = (html, text) => {
    console.log(html, text);
  };
  return (
    <Container>
      <TrixEditor onChange={handleChange} />
      this is text editor
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

export default TextEditor;
