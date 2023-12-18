import styled from "styled-components";
import { flexCenter } from "../styles/common.style";

const Posts = ({ info }) => {
  return (
    <Table>
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
