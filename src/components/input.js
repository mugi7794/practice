import { styled, css } from "styled-components";
import { flexCenter } from "../styles/common.style";

const SSInput = ({ label, size, ...inputProps }) => {
  return (
    <InputBox size={size}>
      <label>{label}</label>
      <input {...inputProps}></input>
    </InputBox>
  );
};

export default SSInput;

const InputBox = styled.div`
  border: none;
  margin: 0px;
  outline: none;
  ${({ size }) => sizeCSS[size]}
  ${flexCenter}

    & input {
    width: 100%;
    height: 100%;
    border: 1px solid black;
  }

  & label {
    font-size: ${({ theme }) => theme.FONT_SIZE.medium};
    width: 50px;
    height: 100%;
  }
`;

const sizeCSS = {
  small: css`
    width: 200px;
    height: 20px;
  `,
  medium: css`
    width: 400px;
    height: 40px;
  `,
  large: css`
    width: 600px;
    height: 60px;
  `,
};
