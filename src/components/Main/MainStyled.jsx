import styled from "styled-components";
import homeBgImg from "../../images/homeBg.jpg";
const MainStyled = styled.main`
  min-height: 100vh;
  padding: 40px 0;
  background-color: ${(props) => props.colors.background};
`;

export default MainStyled;

// background-image: ${homeBgImg};
