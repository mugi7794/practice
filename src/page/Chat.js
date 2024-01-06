import { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import "./Chat.css";
import InfoBar from "../components/InfoBar/InfoBar";
import Messages from "../components/Messages/Messages";
import Input from "../components/Input/Input";
import TextContainer from "../components/TextContainer/TextContainer";

const ENDPOINT = "http://localhost:5000";
let socket;

const Chat = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState("");

  useEffect(() => {
    const { name, room } = queryString.parse(window.location.search); // url querystring을 분석하여 객체로 반환. /window.location.search는 ? 뒤의 쿼리스트링을 가져온다.
    socket = io(ENDPOINT); // 기본값은 window.location.host이며, url경로 이름으로 지정된 네임스페이스에 대해 새 인스턴스 반환. ex)/user이면 http://localhost/user 설정
    setName(name);
    setRoom(room);
    socket.emit("join", { name, room }, (err) => {
      // eventName, arg, ack(function)
      //emit은 기본적으로 네트워크를 통해 서버에 이벤트를 보내고 받는다.
      if (err) {
        alert(err);
      }
    });
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, window.location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      // on은 해당 이벤트를 받고 콜백함수를 실행한다.
      setMessages([...messages, message]);
    });
    socket.on("roomData", (users) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <TextContainer users={users} />
    </div>
  );
};

export default Chat;
