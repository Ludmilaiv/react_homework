import { FC, useState } from 'react';
import { IShowChatListProps } from './interface';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';

export const ChatList: FC<IShowChatListProps> = ({ chats, onAddChat }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name) {
      onAddChat([
        ...chats,
        {
          id: nanoid(),
          name: name,
        },
      ]);
      setName('');
    }
  };

  return (
    <div>
      <List>
        {chats.map((elem) => (
          <ListItem key={elem.id}>
            <ListItemText
              primary={<Link to={`/chats/${elem.id}`}>{elem.name}</Link>}
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
