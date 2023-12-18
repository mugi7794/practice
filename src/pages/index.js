import SSButton from "../components/button";
import SSInput from "../components/input";
import SSSelect from "../components/select";
import SSCheckBox from "../components/checkbox";
import SSModal from "../components/modal";
import Posts from "../components/post";
import { userList } from "../user-list/user-list";
import { useSearchParams } from "react-router-dom";
import Pagination from "../components/pagenation";
import styled from "styled-components";
import { flexCenter } from "../styles/common.style";

const HomePage = () => {
  const arrayForSelect = [
    "아이브",
    "트와이스",
    "블랙핑크",
    "르세라핌",
    "뉴진스",
  ];
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = searchParams.get("page") || 1; // page라는 이름의 파람의 값을 가져와라 .
  const perPage = searchParams.get("perPage") || 20; // pagePer 페이지당 몇개인지 필터에서 사용했겠죠

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
      <Wrapper>
        <ButtonWrapper>
          <SSButton variant={"primary"} size={"large"} shape={"normal"}>
            얍
          </SSButton>
          <SSButton variant={"secondary"} size={"large"} shape={"normal"}>
            얍
          </SSButton>
        </ButtonWrapper>
        <SSInput label={"라벨"} size={"large"} />
        <SSSelect variant={"primary"} label={"걸그룹"} data={arrayForSelect} />
        <SSCheckBox size={"small"} />
        <SSModal variant={"secondary"} size={"medium"} label={"마이크첵원투"} />
        <Posts info={sliceDataByPerPage(userList)} />
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
  ${flexCenter}
  flex-direction: column;
`;

const ButtonWrapper = styled.div``;
