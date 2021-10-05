import styled from 'styled-components';
import MainNavigation from './MainNavigation';

const Layout = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
};

const Container = styled.div``;

export default Layout;
