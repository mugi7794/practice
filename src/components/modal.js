import { styled, css } from "styled-components";
import { useState } from "react";
import { flexCenter } from "../styles/common.style";
import SSInput from "../components/input";
import SSSelect from "../components/select";
import SSButton from "../components/button";

const SSModal = ({ variant, size, data, themeState }) => {
  const arrayForSelect = [
    "아이브",
    "트와이스",
    "블랙핑크",
    "르세라핌",
    "뉴진스",
  ];

  const year = ["년"];
  const month = ["월"];
  const day = ["일"];

  // 년월일 추가
  for (let i = 1940; i <= 2023; i++) {
    year.push(i);
  }

  for (let i = 1; i <= 12; i++) {
    month.push(i);
  }

  for (let i = 1; i <= 31; i++) {
    day.push(i);
  }

  const onSubmitAddList = (e) => {
    e.preventDefault();
    const today = new Date();
    data.push({
      id: data.length + 1,
      name: e.target.name.value,
      birth: `${e.target.year.value}-${e.target.month.value}-${e.target.day.value}`,
      phone: e.target.phone.value,
      lastestlogin: `${today.getFullYear()} ${
        today.getMonth() + 1
      } ${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`,
    });
    alert("회원이 추가되었습니다 !");
  };

  return (
    <ModalBox variant={variant} size={size} themeState={themeState}>
      <form onSubmit={onSubmitAddList}>
        <SSInput name={"name"} label={"이름"} size={"small"} />
        <BirthBox>
          <Birth>생년월일</Birth>
          <SelectBox themeState={themeState}>
            <SSSelect name={"year"} variant={"primary"} data={year} />
            <SSSelect name={"month"} variant={"primary"} data={month} />
            <SSSelect name={"day"} variant={"primary"} data={day} />
          </SelectBox>
        </BirthBox>
        <SSInput name={"phone"} label={"전화번호"} size={"small"} />
        <ButtonWrap>
          <SSButton variant={"primary"} size={"small"} shape={"normal"}>
            회원등록
          </SSButton>
        </ButtonWrap>
      </form>
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
    height: 150px;
  `,
  medium: css`
    width: 300px;
    height: 200px;
  `,
  large: css`
    width: 400px;
    height: 500px;
  `,
};

const ModalBox = styled.div`
  ${({ variant }) => variantCSS[variant]}
  background-color: ${({ themeState, theme }) =>
    themeState === 1 && theme.darkTheme.textColor};
  color: ${({ themeState, theme }) =>
    themeState === 1 && theme.darkTheme.contentColor};
  ${({ size }) => sizeCSS[size]}
  ${flexCenter}
    flex-direction: column;
  position: absolute;
  top: 10%;
  right: 10%;
  border-radius: 10px;

  &:hover {
    background-color: ${({ themeState, theme }) =>
      themeState === 1 && theme.darkTheme.hoverColor};
    color: ${({ themeState, theme }) =>
      themeState === 1 && theme.darkTheme.contentColor};
  }
`;

const SelectBox = styled.div`
  ${flexCenter}
  align-items: center;

  & select {
    margin-right: 5px;
    background-color: ${({ themeState, theme }) =>
      themeState === 1 && theme.darkTheme.backgroundColor};
  }

  & select > option {
    background-color: ${({ themeState, theme }) =>
      themeState === 1 && theme.darkTheme.backgroundColor};
  }
`;

const ButtonWrap = styled.div`
  ${flexCenter}
  margin-top: 15px;
`;
const Birth = styled.label`
  padding-right: 20px;
`;

const BirthBox = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
  padding-left: 10px;
`;
