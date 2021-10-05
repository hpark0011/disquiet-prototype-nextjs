import styled from 'styled-components';
import Link from 'next/Link';

const Footer = () => {
  return (
    <FooterWrapper>
      <SiteMapWrapper>
        <FooterLink href='/'>
          <a className='footerLink'>홈</a>
        </FooterLink>
        <FooterDivider>•</FooterDivider>
        <FooterLink href='/about'>
          <a className='footerLink'>사이트 소개</a>
        </FooterLink>
        <FooterDivider>•</FooterDivider>
        <FooterLink href='https://www.disquiet.tech/blog'>
          <a className='footerLink'>커뮤니티</a>
        </FooterLink>
        <FooterDivider>•</FooterDivider>
        <a className='footerLink' target='_blank' rel='noreferrer'>
          매거진
        </a>
        <FooterDivider>•</FooterDivider>
        <FooterLink href='https://open.kakao.com/o/gNHa78Bc'>
          <a className='footerLink'>슬랙봇</a>
        </FooterLink>
        <FooterDivider>•</FooterDivider>
        <a className='footerLink' target='_blank' rel='noreferrer'>
          카카오톡
        </a>
        <FooterDivider>•</FooterDivider>
        <a
          className='footerLink'
          href='https://www.facebook.com/groups/disquiet.io'
          target='_blank'
          rel='noreferrer'
        >
          페이스북
        </a>
        <FooterDivider>•</FooterDivider>
        <a
          className='footerLink'
          href='https://www.instagram.com/disquiet_io/'
          target='_blank'
          rel='noreferrer'
        >
          인스타그램
        </a>
        <FooterDivider>•</FooterDivider>
        <a
          className='footerLink'
          href='mailto:support@disquiet.io'
          target='_blank'
          rel='noreferrer'
        >
          문의
        </a>
      </SiteMapWrapper>
      <CompanyInfo>© 2021 Disquiet</CompanyInfo>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  display: block;
  padding-top: 24px;
`;

const SiteMapWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;

  .footerLink {
    display: inline-block;
    font-size: 12px;
    text-decoration: none;
    color: #8e8e8e;
    margin: 0.125rem 0.25rem;

    &:hover {
      opacity: 0.7;
    }
  }
`;

const FooterLink = styled(Link)`
  display: inline-block;
  font-size: 12px;
  text-decoration: none;
  color: #8e8e8e;
  margin: 0.125rem 0.25rem;

  &:hover {
    opacity: 0.7;
  }
`;

const FooterDivider = styled.p`
  display: inline-block;
  font-size: 0.5rem;
  line-height: 1em;
  text-decoration: none;
  color: 88ee8e;
  margin: 0 0.125rem;
`;

const CompanyInfo = styled.p`
  display: block;
  font-size: 12px;
  text-decoration: none;
  color: #8e8e8e;
  margin: 0.5rem 0.25rem;
`;

export default Footer;
