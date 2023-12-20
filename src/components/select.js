import styled, { css } from "styled-components";
import { flexCenter } from "../styles/common.style";

const SSSelect = ({ label, variant, data, name }) => {
  return (
    <SelectBox variant={variant}>
      <Label>{label}</Label>
      <select name={name}>
        {data.map((item) => (
          <option>{item}</option>
        ))}
      </select>
    </SelectBox>
  );
};

export default SSSelect;

const variantCSS = {
  primary: css`
    background-color: ${({ theme }) => theme.COLORS.primary[300]};
    color: ${({ theme }) => theme.COLORS.white};
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.COLORS.secondary[200]};
    color: ${({ theme }) => theme.COLORS.secondary[400]};
  `,
};

const SelectBox = styled.div`
  height: 35px;
  border-radius: 4px;
  ${flexCenter}

  & select {
    ${({ variant }) => variantCSS[variant]}
    border-radius: 4px;
    padding: 4px;
    font-size: ${({ theme }) => theme.FONT_SIZE.small};
    width: 50px;
  }

  & select > option {
    ${({ variant }) => variantCSS[variant]}
    font-size: ${({ theme }) => theme.FONT_SIZE.small};
    padding: 4px;
    text-align: center;
  }
`;

const Label = styled.label`
  padding: 0;
`;
