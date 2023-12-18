import { styled, css } from "styled-components";

const SSCheckBox = ({ size }) => {
  return (
    <CheckBox size={size}>
      <input id="checkbox" type="checkbox"></input>
      <label htmlFor="checkbox"></label>
    </CheckBox>
  );
};

export default SSCheckBox;

const CheckBox = styled.div`
  & input {
    display: none;
  }

  & label {
    display: flex;
    ${({ size }) => sizeCSS[size]}
    border: 2px solid gray;
    cursor: pointer;
  }

  & input:checked + label::after {
    content: "✔";
    ${({ size }) => sizeCSS[size]}
    text-align: center;
    background-color: white;
  }
`;

const sizeCSS = {
  small: css`
    width: 20px;
    height: 20px;
    font-size: ${({ theme }) => theme.FONT_SIZE.small};
  `,
  medium: css`
    width: 26px;
    height: 26px;
    font-size: ${({ theme }) => theme.FONT_SIZE.medium};
  `,
  large: css`
    width: 30px;
    height: 30px;
    font-size: ${({ theme }) => theme.FONT_SIZE.large};
  `,
};
