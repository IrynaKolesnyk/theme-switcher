import styled from 'styled-components';

const ContactPageStyled = styled.div`
  .contactTitle {
    margin: 0 auto 15px;
    width: 400px;
    padding-bottom: 10px;
    text-align: center;
    font-size: 40px;
    font-weight: 800;
    text-transform: uppercase;
    background: linear-gradient(45deg, #0b2349 20%, #0d61bc 75%, #8aa9d6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .contactListTitle {
    margin-bottom: 20px;
    padding: 10px;
    font-size: 30px;
    text-align: center;
    background: linear-gradient(45deg, #0b2349 20%, #0d61bc 75%, #8aa9d6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border-bottom: 3px solid transparent;
    border-image: linear-gradient(45deg, #0b2349 20%, #0d61bc 75%, #8aa9d6);
    border-image-slice: 1;
  }
`;

export default ContactPageStyled;
