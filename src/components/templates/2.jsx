import styled from "styled-components";
import * as colors from "@styles/colors";

const Container = styled.div`
  margin-top: 64px;
  width: 100%;
  height: 400px;
  padding: 20px;
`;

const BannerWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.textYellow};
  position: relative;
`;

const TopLeftTriangle = styled.div`
  width: 0px;
  height: 0px;
  border-top: 60px solid ${colors.bgPrimary};
  border-right: 60px solid transparent;
  position: absolute;
  top: 0px;
  left: 0px;
`;

const TopRightTriangle = styled.div`
  width: 0px;
  height: 0px;
  border-bottom: 60px solid ${colors.bgPrimary};
  border-left: 60px solid transparent;
  position: absolute;
  top: 0px;
  right: 0px;
`;

const BannerOrderBox = styled.div`
  width: 51px;
  height: 29px;
  background-color: ${colors.bgBannerButton};
  border-radius: 6px;
  position: absolute;
  left: 16px;
  bottom: 16px;
  font-size: 14px;
  color: ${colors.textSecondary};
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function TopBanner() {
  return (
    <Container>
      <BannerWrapper>
        <TopLeftTriangle />
        <TopRightTriangle />
        <BannerOrderBox> 1 / 2</BannerOrderBox>
      </BannerWrapper>
    </Container>
  );
}

export default TopBanner;
