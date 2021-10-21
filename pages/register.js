import styled from 'styled-components';
import ReducerForm from '../components/magazine/ReducerForm';

const RegisterPage = () => {
  return (
    <RegisterPageContainer>
      <ReducerForm />
    </RegisterPageContainer>
  );
};

const RegisterPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1120px;
  margin: 0 auto;
  margin-top: 80px;
`;

export default RegisterPage;
