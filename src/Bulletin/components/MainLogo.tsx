import styled from "styled-components";
import { ReactComponent as LogoSVG } from "images/mainLogo.svg";

const MainLogo = () => {
  const now = new Date();
  const closestSunday =
    now.getDay() === 0
      ? now
      : new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() + 7 - now.getDay()
        );

  return (
    <Wrapper>
      <LogoSVG />
      <DateString>{`${closestSunday.getFullYear()}.${
        closestSunday.getMonth() + 1
      }.${closestSunday.getDate()}`}</DateString>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;
const DateString = styled.h1`
  position: absolute;
  left: 0px;
  bottom: 10px;
  font-family: ${(props) => props.theme.font.title};
  font-weight: 400;
  font-size: 13px;
  color: ${(props) => props.theme.color.blue};
`;

export default MainLogo;
