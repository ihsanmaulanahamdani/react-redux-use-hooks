import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./main.css";

import { getChats } from "../../store/chats/chat.action";

function Main() {
  const [object, setObject] = useState({ text: "" });
  const [chats, setChats] = useState([{ id: 2, text: "Hai..." }]);

  const store = useSelector(state => state.chats);
  const dispatch = useDispatch();

  function onSubmitText(e) {
    e.preventDefault();

    setChats([...chats, object]);

    setObject({ text: "" });

    dispatch(getChats(chats));
  }

  useEffect(() => {
    dispatch(getChats(chats));
  }, [chats, dispatch]);

  return (
    <div className="main-background">
      <div className="chat">
        {store.chats.map((chat, index) => {
          return chat.id === 1 ? (
            <p key={index + 1} className="user-2">
              {chat.text}
            </p>
          ) : (
            <p key={index + 1} className="user-1">
              {chat.text}
            </p>
          );
        })}
      </div>
      <div className="input-text">
        <form onSubmit={onSubmitText}>
          <input
            type="text"
            onChange={e => setObject({ id: 1, text: e.target.value })}
            value={object.text}
            placeholder="Tulis pesan"
          />
        </form>
      </div>
    </div>
  );
}

export default Main;
