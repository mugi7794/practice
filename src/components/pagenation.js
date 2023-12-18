import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { flexCenter } from "../styles/common.style";
import PropsTypes from "prop-types";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

const Pagination = ({ totalLength, pagesPerGroup, variant, size, shape }) => {
  //useSearchParams => 쿼리스트링 추출 {page : 12 }
  const [searchParams, setSearchParams] = useSearchParams();

  const perPage = Number(searchParams.get("perPage")) || 20;
  const page = Number(searchParams.get("page")) || 1;
  const totalPage = totalLength / perPage;

  const [currentPage, setCurrentPage] = useState(page);

  //처음 페이지 이동 함수
  const onMoveStartPage = () => {
    setCurrentPage(1);
  };

  //마지막 페이지 이동 함수9
  const onMoveLastPage = () => {
    setCurrentPage(totalPage);
  };

  //뒤로 가기 함수
  const onMoveNextPage = () => {
    if (currentPage !== totalPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  //앞으로 가기 함수
  const onMovePrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  //페이지 그룹을 바꿔주는 함수 => 현재 페이지가 바뀔 때마다 실행
  useEffect(() => {
    const newCurrentGroup = Math.ceil(currentPage / pagesPerGroup);
    searchParams.set("page", currentPage); // page라는 이름의 param에 current라는 value값.
    setSearchParams(searchParams);
  }, [currentPage]); // currentpage(버튼을 누를 때 몇 페이지인지) 가 변할 때마다 page라는 이름의 param에 currentPage라는 value값을 넣어준다.

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  //해당 페이지로 이동하는 함수
  const onMoveTargetPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const Buttons = Array(pagesPerGroup) //5
    .fill()
    .map((_, idx) => {
      const currentGroup = Math.ceil(currentPage / 5);
      const pageNumber = (currentGroup - 1) * pagesPerGroup + idx + 1;
      // data가 없으면 얼리 리턴으로 버튼 생성 X
      if (totalLength > perPage * idx) return pageNumber;
      return null; // Add a return statement at the end of the arrow function
    });

  return (
    <S.Wrapper variant={variant} size={size} shape={shape}>
      <S.Button onClick={onMoveStartPage}>
        <KeyboardDoubleArrowLeftIcon />
      </S.Button>
      <S.Button onClick={onMovePrevPage}>
        <KeyboardArrowLeftIcon />
      </S.Button>
      {/*버튼들 현재 그룹 => 해당 버튼들만 보여주기*/}
      {Buttons.map((pageNumber) => {
        if (!pageNumber) return;
        return (
          <S.Button
            variant={variant}
            onClick={() => {
              onMoveTargetPage(pageNumber);
            }}
            isFocus={pageNumber === page}
          >
            {pageNumber}
          </S.Button>
        );
      })}
      <S.Button onClick={onMoveNextPage}>
        <KeyboardArrowRightIcon />
      </S.Button>
      <S.Button onClick={onMoveLastPage}>
        <KeyboardDoubleArrowRightIcon />
      </S.Button>
    </S.Wrapper>
  );
};
export default Pagination;

const variantCSS = {
  primary: css`
    background-color: ${({ theme }) => theme.COLORS.primary[300]};
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.COLORS.secondary[400]};
  `,
};

const sizeCSS = {
  small: css`
    width: 40px;
    height: 40px;
    font-size: ${({ theme }) => theme.FONT_SIZE.small};
  `,
  medium: css`
    width: 45px;
    height: 45px;
    font-size: ${({ theme }) => theme.FONT_SIZE.medium};
  `,
  large: css`
    width: 50px;
    height: 50px;
    font-size: ${({ theme }) => theme.FONT_SIZE.large};
  `,
};

const shapeCSS = {
  round: css`
    border-radius: 50%;
  `,
  square: css`
    border-radius: 5px;
  `,
  stylerish: css`
    border-radius: 50% 20% / 10% 40%;
  `,
};

const Wrapper = styled.div`
  width: 1000px;
  height: 100px;
  ${flexCenter}

  & button {
    ${({ variant }) => variantCSS[variant]}
    ${({ size }) => sizeCSS[size]}
    text-align: center;
    ${({ shape }) => shapeCSS[shape]}
  }
`;

const Button = styled.button`
  ${({ isFocus, variant }) => isFocus && variantCSS[variant]}
  color: ${({ isFocus }) => (isFocus ? "white" : "black")};
  font-weight: ${({ isFocus, theme }) =>
    isFocus ? theme.FONT_WEIGHT.bold : theme.FONT_WEIGHT.regular};

  /* width: 30px;
  height: 30px;
  font-size: 15px; */

  cursor: pointer;
`;

export const S = {
  Wrapper,
  Button,
};

Pagination.propTypes = {
  /** * 컬러 변경 */ variant: PropsTypes.oneOf(["primary", "secondary"]),
  /** * 총 게시물 수 */ totalLength: PropsTypes.number,
  /** * 페이지당 보여줄 게시물 수 */ pagesPerGroup: PropsTypes.number,
  /** 사이즈 크기 조절 */ size: PropsTypes.oneOf(["small", "medium", "large"]),
  /** 모양 조절 */ shape: PropsTypes.oneOf(["round", "square", "stylerish"]),
};
