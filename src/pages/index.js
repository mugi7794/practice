import SSButton from "../components/button";

import SSModal from "../components/modal";
import Posts from "../components/post";
import { userList } from "../user-list/user-list";
import { useNavigate, useSearchParams } from "react-router-dom";
import Pagination from "../components/pagenation";
import styled from "styled-components";
import { flexCenter } from "../styles/common.style";
import { useState } from "react";
import SSInput from "../components/input";
import SSSelect from "../components/select";

const HomePage = () => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [themeState, setThemeState] = useState(2); // 1일 때는 black 2일 때는 white

  const currentPage = searchParams.get("page") || 1; // page라는 이름의 파람의 값을 가져와라 .
  const perPage = searchParams.get("perPage") || 10; // pagePer 페이지당 몇개인지 필터에서 사용했겠죠

  const totalLength = userList.length;
  // 페이지네이션 버튼 그룹당 페이지 수
  const pagesPerGroup = 5;

  //현재 페이지에 보이는 콘텐츠 리스트
  const sliceDataByPerPage = (list) => {
    const currentFirstIndex = (currentPage - 1) * perPage;
    const currentLastIndex = currentPage * perPage;
    const slicedData = list.slice(currentFirstIndex, currentLastIndex);
    return slicedData;
  };

  return (
    <>
      <Wrapper themeState={themeState}>
        <ButtonWrapper>
          <ThemeButtonWrapper>
            <SSButton
              variant={"primary"}
              size={"small"}
              shape={"normal"}
              onClick={() => setThemeState(1)}
            >
              Black
            </SSButton>
            <SSButton
              variant={"primary"}
              size={"small"}
              shape={"normal"}
              onClick={() => setThemeState(2)}
            >
              White
            </SSButton>
          </ThemeButtonWrapper>
          <CSSButtonWrapper>
            <SSButton
              variant={"secondary"}
              size={"small"}
              shape={"normal"}
              onClick={() => navigate("/tailwind")}
            >
              TailWind
            </SSButton>
            <SSButton
              variant={"secondary"}
              size={"small"}
              shape={"normal"}
              onClick={() => navigate("/chakra")}
            >
              Chakra
            </SSButton>
          </CSSButtonWrapper>
        </ButtonWrapper>
        <SSButton
          variant={"primary"}
          size={"large"}
          shape={"normal"}
          onClick={() => setIsOpenModal((prev) => !prev)}
        >
          회원 추가
        </SSButton>
        {isOpenModal && (
          <SSModal
            variant={"secondary"}
            size={"medium"}
            data={userList}
            themeState={themeState}
          />
        )}
        <Posts info={sliceDataByPerPage(userList)} themeState={themeState} />
        <Pagination
          totalLength={totalLength}
          pagesPerGroup={pagesPerGroup}
          variant={"primary"}
          size={"small"}
          shape={"square"}
        />
      </Wrapper>
    </>
  );
};

export default HomePage;

const Wrapper = styled.div`
  height: calc(100vh - 100px);
  background-color: ${({ themeState, theme }) =>
    themeState === 1
      ? theme.darkTheme.backgroundColor
      : themeState === 2
        ? theme.lightTheme.backgroundColor
        : theme.lightTheme.backgroundColor};
  ${flexCenter}
  flex-direction: column;
  padding: 50px 0;

  & button {
    background-color: ${({ themeState, theme }) =>
      themeState === 1 && theme.darkTheme.textColor};
    color: ${({ themeState, theme }) =>
      themeState === 1 && theme.darkTheme.contentColor};
    border: ${({ themeState, theme }) =>
      themeState === 1 && theme.darkTheme.borderColor};
  }

  & button:hover {
    background-color: ${({ themeState, theme }) =>
      themeState === 1 && theme.darkTheme.highlight};
    color: ${({ themeState, theme }) =>
      themeState === 1 && theme.darkTheme.textColor};
  }
`;

const SearchModal = styled.div``;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 170px;
  position: absolute;
  top: 3%;
  left: 3%;
`;

const ThemeButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CSSButtonWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;
