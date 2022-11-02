import SectionLayout from "@components/molecules/SectionLayout";
import SectionTop from "@components/molecules/SectionTop";
import styled from "styled-components";
import * as colors from "@styles/colors";

const CollectionList = styled.ul`
  margin-top: 16px;
`;

const CollectionItem = styled.li`
  padding: 12px 16px;
  border-bottom: 1px solid ${colors.borderSecondary};
`;

const CollectionInfo = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  margin-bottom: 24px;
`;

const RankText = styled.div`
  font-family: MarkPro-Heavy;
  font-size: 14px;
  color: ${colors.textYellow};
`;

const Thumbnail = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-left: 24px;
  background-color: ${colors.bgSecondary};
  object-fit: contain;
`;

const CollectionName = styled.span`
  font-weight: 500;
  margin-left: 12px;
`;

const CollectionPriceInfo = styled.div`
  height: 60px;
  padding: 0px 28px;
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
`;

const NormalText = styled.span`
  font-size: 12px;
  color: ${colors.textSecondary};
`;

const SpanDoubleWrapper = styled.div`
  grid-column: span 2;
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const NumberText = styled(NormalText)`
  color: ${colors.textGreen};
`;

export default function OpenseaTopCollections() {
  return (
    <SectionLayout>
      <SectionTop title="많이 거래된 컬렉션" showAll="오픈씨 데이터 기준" />
      <CollectionList>
        <CollectionItem>
          <CollectionInfo>
            <RankText>1</RankText>
            <Thumbnail src="https://konkrit-prod-collectionmedia-156cyqu7bx316.s3.ap-northeast-2.amazonaws.com/main/0x209e639a0ec166ac7a1a4ba41968fa967db30221.png" />
            <CollectionName>Genuine Undead</CollectionName>
          </CollectionInfo>
          <CollectionPriceInfo />
          <NormalText></NormalText>
          <SpanDoubleWrapper></SpanDoubleWrapper>
          <NormalText></NormalText>
          <PriceWrapper></PriceWrapper>
          <NumberText></NumberText>
        </CollectionItem>
        <CollectionItem />
      </CollectionList>
    </SectionLayout>
  );
}
