import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import Header from "@components/templates/Header";
import TopBanner from "@components/templates/TopBanner";

const Events = styled.div`
  width: 100%;
  height: 398px;
  background-color: pink;
`;

const ItemsOnSale = styled.div`
  width: 100%;
  height: 394px;
  background-color: blue;
`;

const OpenseaTopCollections = styled.div`
  width: 100%;
  height: 648px;
  background-color: dodgerblue;
`;

const OnBoarding = styled.div`
  width: 100%;
  height: 415px;
  background-color: teal;
`;

const Footer = styled.footer`
  width: 100%;
  height: 240px;
  background-color: floralwhite;
  margin-top: 100px;
`;


function App() {
  return (
    <>
      <GlobalStyle />
      <Header>헤더부분</Header>
      <TopBanner>탑 배너</TopBanner>
      <Events>이벤트부분</Events>
      <ItemsOnSale>판매중인 아이템</ItemsOnSale>
      <OpenseaTopCollections> 많이 거래된 컬렉션</OpenseaTopCollections>
      <OnBoarding>온보딩</OnBoarding>
      <Footer>푸터</Footer>
    </>
  );
}

export default App;
