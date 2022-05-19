import { FC, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addChat, deleteChat } from '../../store/chats/actions';
import { selectChatList } from '../../store/chats/selectors';

export const ChatList: FC = () => {
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  const chatList = useSelector(
    selectChatList,
    (prev, next) => prev.length === next.length
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name) {
      dispatch(addChat(name));
      setName('');
    }
  };

  return (
    <div>
      <List>
        {chatList.map((elem) => (
          <ListItem key={elem.id}>
            <ListItemText
              primary={
                <>
                  <Link to={`/chats/${elem.id}`}>{elem.name}</Link>
                  <button onClick={() => dispatch(deleteChat(elem.id))}>
                    X
                  </button>
                </>
              }
              secondary={null}
            />
          </ListItem>
        ))}
      </List>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add chat</button>
      </form>
    </div>
  );
};
