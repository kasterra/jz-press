import MainPage from "../Bulletin/MainPage";
import styled from "styled-components";

const ResultScreen = () => {
  return (
    <div>
      <MainPage />
    </div>
  );
};

const H1 = styled.h1`
  font-family: ${(props) => props.theme.font.main};
`;

export default ResultScreen;
