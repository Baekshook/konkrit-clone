import styled from "styled-components";
import * as colors from "@styles/colors";
const Container = styled.div`
  width: 100%;
  height: 398px;
  background-color: red;
  font-family: MarkPro-Heavy;
  font-size: 32px;
  padding: 40px 16px;
`;

const EventsTopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const GradientSectionTitle = styled.span`
  font-size: 18px;
  font-weight: 700px;
  background: ${colors.textGradient};
  background-clip: text;
  -webkit-background-clip: text;
`;
const ShowAllText = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: ${colors.textSecondary};
`;

function Events() {
  return (
    <Container>
      <EventsTopWrapper>
        <GradientSectionTitle>테스트</GradientSectionTitle>
        <ShowAllText>테스트 2</ShowAllText>
      </EventsTopWrapper>
    </Container>
  );
}

export default Events;
