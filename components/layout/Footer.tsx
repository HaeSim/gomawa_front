import React from 'react';
import styled from '@emotion/styled';
import theme from 'styles/theme';
import Link from 'next/link';

const Footer = () => {
  return (
    <FooterLayout>
      <FooterLeft>
        <LogoAndSns>
          <Logo>
            <p>고.마.워</p>
          </Logo>
          {/* <FooterSns></FooterSns> */}
        </LogoAndSns>
        <FooterDetail>
          <p>
            <span>
              우리와 프로젝트를 함께하고 싶으면 하단 주소로 메일 보내주세요.
            </span>
          </p>
          <p>
            <span> If you want to work on the GOMAWA project together,</span>
          </p>
          <p>
            <span> please send an email to the address below</span>
          </p>
        </FooterDetail>
        <SubmitWrapper>
          <p>
            <span>wanabe@lotte.net</span>
          </p>
        </SubmitWrapper>
      </FooterLeft>
      <FooterRight>
        <ul>
          <li>
            <Link href='https://github.com/DeanIsDeno/gomawa_front'>
              <UtilLink>Github</UtilLink>
            </Link>
          </li>
          <li>|</li>
          <li>
            <Link href='/test'>
              <UtilLink>Issue</UtilLink>
            </Link>
          </li>
          <li>|</li>
          <li>
            <Link href='/test'>
              <UtilLink>서비스 이용약관</UtilLink>
            </Link>
          </li>
        </ul>
        <FooterDetail>
          <p>
            롯데정보통신(주){' '}
            <span>서울특별시 금천구 가산디지털2로 179(가산동, 롯데센터)</span>
          </p>
          <p>
            <span>
              사업자등록번호 : 687-81-00785 | 대표이사 : 노준형 | 08500 &copy;
              All Rights Reservd, 2022 LDCC JuniorBoard
            </span>
          </p>
        </FooterDetail>
      </FooterRight>
    </FooterLayout>
  );
};

const FooterLayout = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 71px 0px;
  gap: 3rem;

  background-color: #da2a1c;

  @media (max-width: ${(props) => props.theme.bp.lg}) {
    flex-direction: column;
  }
`;

const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;

  @media (max-width: ${(props) => props.theme.bp.lg}) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const LogoAndSns = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.25rem;
`;

const Logo = styled.div`
  p {
    font-weight: 600;
    font-size: 2rem;
    color: white;
  }
`;

const FooterSns = styled.div`
  > a {
    display: inline-block;
    margin-left: 0.8rem;
    color: white;
  }
`;

const SubmitWrapper = styled.div`
  font-size: 1rem;
  color: rgba(235, 235, 245, 0.7);
`;

const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  gap: 1rem;

  > ul {
    display: flex;
    justify-content: flex-end;
    gap: 1.25rem;

    color: white;
  }

  @media (max-width: ${(props) => props.theme.bp.lg}) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const FooterDetail = styled.div`
  > p {
    font-size: 1rem;
    font-weight: 500;
    line-height: 160%;
    color: #fff;
    > span {
      color: rgba(235, 235, 245, 0.7);
    }
  }

  @media (max-width: ${(props) => props.theme.bp.md}) {
    > p {
      font-size: 0.8rem;
    }
  }
`;

const UtilLink = styled.div`
  font-size: 1rem;
  font-weight: 500;

  cursor: pointer;
`;

export default Footer;
