import styled from "styled-components";
import { flexCenter } from "../styles/common.style";

const Posts = ({ info, themeState }) => {
  return (
    <Table themeState={themeState}>
      <thead>
        <Tr>
          <Th>회원번호</Th>
          <Th>이름</Th>
          <Th>생년월일</Th>
          <Th>전화번호</Th>
          <Th>로그인시간</Th>
        </Tr>
      </thead>
      <tbody>
        {info.map((list) => (
          <Tr>
            <Td>{list.id}</Td>
            <Td>{list.name}</Td>
            <Td>{list.birth}</Td>
            <Td>{list.phone}</Td>
            <Td>{list.lastestlogin}</Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Posts;

const Table = styled.table`
  border-top: 2px solid black;
  border-collapse: collapse;
  margin-top: 50px;
  color: ${({ themeState, theme }) =>
    themeState === 1
      ? theme.darkTheme.textColor
      : themeState === 2
        ? theme.lightTheme.textColor
        : theme.lightTheme.textColor};

  & thead {
    color: ${({ themeState, theme }) =>
      themeState === 1
        ? theme.darkTheme.highlight
        : themeState === 2
          ? theme.lightTheme.textColor
          : theme.lightTheme.textColor};

    background-color: ${({ themeState, theme }) =>
      themeState === 1
        ? theme.darkTheme.contentColor
        : themeState === 2
          ? theme.lightTheme.backgroundColor
          : theme.lightTheme.backgroundColor};
  }
`;

const Tr = styled.tr`
  border-bottom: 1px solid gray;
`;

const Th = styled.th`
  padding: 10px;
`;

const Td = styled.td`
  text-align: center;
  padding: 10px;
`;
