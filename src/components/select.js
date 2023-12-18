import styled, { css } from "styled-components";

const SSSelect = ({ label, variant, data }) => {
  return (
    <SelectBox variant={variant}>
      <label>{label}</label>
      <select>
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
    background-color: ${({ theme }) => theme.COLORS.primary[100]};
    color: ${({ theme }) => theme.COLORS.white};
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.COLORS.secondary[200]};
    color: ${({ theme }) => theme.COLORS.secondary[400]};
  `,
};

const SelectBox = styled.div`
  width: 150px;
  height: 35px;
  padding: 5px 30px 5px 10px;
  border-radius: 4px;

  & select {
    ${({ variant }) => variantCSS[variant]}
    border-radius: 4px;
    padding: 4px;
    font-size: ${({ theme }) => theme.FONT_SIZE.small};
  }

  & select > option {
    ${({ variant }) => variantCSS[variant]}
    font-size: ${({ theme }) => theme.FONT_SIZE.small};
    padding: 4px;
  }
`;
