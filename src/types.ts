export type TAuthor = 'bot' | 'user';
type TMessage = {
  text: string; 
  authorName: string; 
  author: TAuthor; 
  id: string
};

type TChat = {
  name: string; 
  id: string
};

export type TMessages = TMessage[];
export type TChats = TChat[];