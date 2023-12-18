import { styled, css } from "styled-components";

const SSButton = ({ variant, size, shape, children, ...rest }) => {
  return (
    <Button variant={variant} size={size} shape={shape} {...rest}>
      {children}
    </Button>
  );
};
export default SSButton;

const variantCSS = {
  primary: css`
    background-color: ${({ theme }) => theme.COLORS.primary[300]};
    color: ${({ theme }) => theme.COLORS.white};
    &:hover {
      background-color: ${({ theme }) => theme.COLORS.primary[200]};
      color: ${({ theme }) => theme.COLORS.white};
    }
  `,

  secondary: css`
    background-color: ${({ theme }) => theme.COLORS.secondary[200]};
    color: ${({ theme }) => theme.COLORS.secondary[400]};

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.secondary[100]};
      color: ${({ theme }) => theme.COLORS.secondary[400]};
    }
  `,
};

const sizeCSS = {
  // small 일 때 버튼 크기랑 폰트 사이즈 굵기 세개 정리
  xsmall: css`
    font-size: ${({ theme }) => theme.FONT_SIZE.xsmall};
    width: 50px;
    height: 15px;
    padding: auto;
  `,
  small: css`
    font-size: ${({ theme }) => theme.FONT_SIZE.small};
    width: 76px;
    height: 23px;
    padding: auto;
  `,
  medium: css`
    font-size: ${({ theme }) => theme.FONT_SIZE.medium};
    width: 92px;
    height: 30px;
    padding: auto;
  `,
  large: css`
    font-size: ${({ theme }) => theme.FONT_SIZE.large};
    width: 120px;
    height: 42px;
    padding: auto;
  `,
  xlarge: css`
    font-size: ${({ theme }) => theme.FONT_SIZE.xlarge};
    width: 152px;
    height: 50px;
    padding: auto;
  `,
};

const shapeCSS = {
  normal: css`
    border-radius: 10px;
  `,
  round: css`
    border-radius: 50%;
  `,
  stylerish: css`
    border-radius: 50% 20% / 10% 40%;
  `,
};

const Button = styled.button`
  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
    ${({ shape }) => shapeCSS[shape]}
    cursor: pointer;
  border: none;
`;
