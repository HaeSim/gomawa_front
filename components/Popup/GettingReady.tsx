import styled from '@emotion/styled';

type Props = {
  popupHandler: Function;
};

const ChildSuccess = ({ popupHandler }: Props) => {
  return (
    <SuccessInfoWrapper>
      <ContentsWrapper>
        <TitleWrapper>
          <Title>준비중이예요!</Title>
        </TitleWrapper>
        <MintImage src='images/goguma.png' alt='gummy image' />
        <SubTitle>빠른 시일 내에 새로운 기능으로 찾아갈게요 🥰</SubTitle>
      </ContentsWrapper>
      <ExtraLink onClick={() => popupHandler(false)}>기다릴게요!!</ExtraLink>
    </SuccessInfoWrapper>
  );
};

export const Badge = styled.img`
  position: absolute;
  top: -40px;

  width: 73px;
  height: 73px;
  object-fit: contain;
`;

const SuccessInfoWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  padding-top: 51px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const MintImage = styled.img`
  width: 180px;
  height: 180px;

  object-fit: contain;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;

  width: 100%;
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const Title = styled.div`
  text-align: center;
  font-size: 26px;
  font-weight: 600;
  color: #da2a1c;
`;

const SubTitle = styled.div`
  text-align: center;
  font-size: 16px;
  color: #505050;
`;

const ExtraLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 360px;
  height: 60px;
  background-color: #da2a1c;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  cursor: pointer;
  vertical-align: middle;
  font-size: 20px;
  :hover {
    background-color: #da2a1c;
  }
`;

export default ChildSuccess;
