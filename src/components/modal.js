import { styled, css } from "styled-components";
import { useState } from "react";
import { flexCenter } from "../styles/common.style";

const SSModal = ({ variant, size, label }) => {
  const [isModal, setIsModal] = useState(true);

  const onClickModal = () => {
    setIsModal((prev) => !prev);
    console.log("잉");
  };

  return (
    <ModalBox variant={variant} size={size}>
      {isModal ? (
        <>
          <button onClick={onClickModal}>닫기</button>
          {label}
        </>
      ) : (
        <button onClick={onClickModal}>열기</button>
      )}
    </ModalBox>
  );
};

export default SSModal;

const variantCSS = {
  primary: css`
    background-color: ${({ theme }) => theme.COLORS.primary[100]};
    color: ${({ theme }) => theme.COLORS.white};

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.primary[200]};
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.COLORS.secondary[100]};
    color: ${({ theme }) => theme.COLORS.white};

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.secondary[200]};
    }
  `,
};

const sizeCSS = {
  small: css`
    width: 200px;
    height: 40px;
  `,
  medium: css`
    width: 300px;
    height: 50px;
  `,
  large: css`
    width: 400px;
    height: 60px;
  `,
};

const ModalBox = styled.div`
  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
    ${flexCenter}
`;
