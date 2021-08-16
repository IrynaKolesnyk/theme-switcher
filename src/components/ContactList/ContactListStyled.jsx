import styled from "styled-components";

const ContactListStyled = styled.div`
  margin-top: 50px;
  align-items: baseline;
  margin-bottom: 100px;

  .item_list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  .item-enter {
    opacity: 0;
  }

  .item-enter-active {
    opacity: 1;
    transition: opacity 250ms linear;
  }

  .item-exit {
    opacity: 1;
  }
  .item-exit-active {
    opacity: 0;
    transition: opacity 250ms linear;
  }

  p {
    display: inline-block;
    margin-right: 20px;
  }
  .name {
    color: #052f74;
    font-weight: 700;
    font-size: 25px;
  }
  .number {
    color: #202733;
    font-weight: 600;
    font-size: 20px;
  }
`;

export default ContactListStyled;

// , { css, keyframes }

// const fadeIn = keyframes`0% {
//       opacity: 0;
//       transform: translateX(-100px);
//     }
//     100% {
//       transform: translateX(0);
//       opacity: 1;
//     }`;

// const fadeOut = keyframes`0% {
//       opacity: 1;
//       transform: translateX(0);
//     }
//     100% {
//       transform: translateX(100px);
//       opacity: 0;
//     }`;
/* animation: ${fadeOut} 500ms forwards; */
/* animation: ${fadeIn} 500ms forwards; */
// animation: ${(props) =>
//       props.animate &&
//       css`
//         ${fadeIn} 500ms forwards
//       `};
// animation: ${(props) =>
//       props.animate &&
//       css`
//         ${fadeOut} 500ms forwards
//       `};
