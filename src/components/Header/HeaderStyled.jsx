import styled from "styled-components";

const HeaderStyled = styled.header`
  border-bottom: 3px solid transparent;
  border-image: linear-gradient(45deg, #0b2349 20%, #0d61bc 75%, #8aa9d6);
  border-image-slice: 1;
  padding: 10px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.colors.background};

  .siteNav {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .navListItem {
    margin-right: 40px;
  }
  .navLink {
    font-size: 25px;
    color: #3a3ad1;
    font-weight: 900;
    &:hover {
      color: #6e4ac2;
    }
  }
  .activeLink {
    color: #6e4ac2;
  }
`;

export default HeaderStyled;
