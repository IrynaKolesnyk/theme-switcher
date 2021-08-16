import styled from 'styled-components';

const ContactFormStyled = styled.div`
  align-items: center;
  text-align: center;
  margin-bottom: 30px;
  .form-label {
    display: block;
    margin-bottom: 10px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 500;
    font-size: 20px;
    color: #6b7b96;
  }
  .form-input {
    display: block;
    padding: 5px;
    text-align: center;
    margin: 0 auto;
    color: #636161;
    outline: none;
  }
  input:focus {
    box-shadow: 1px 1px 2px 0 #12bcb0;
    border: 1px solid #dbd9d9;
  }
  .addBtn {
    margin-top: 20px;
    padding: 5px;
    background-color: transparent;
    border: 2px solid gray;
    border-radius: 5px;
    font-weight: 700;
    background: linear-gradient(45deg, #0b2349 20%, #0d61bc 75%, #8aa9d6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    &:hover,
    &:focus {
      box-shadow: 1px 1px 2px 0 #0b2349;
    }
  }
`;

export default ContactFormStyled;
