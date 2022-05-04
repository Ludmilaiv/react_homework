import { FC } from 'react';
import { IShowChatListProps } from './interface';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export const ChatList: FC<IShowChatListProps> = ({chats}) => {
  return <List>
    {chats.map(elem => (
      <ListItem key={elem.id}>
        <ListItemText
          primary={elem.name}
          secondary={null}
        />
      </ListItem>
    ))}
  </List>;
};