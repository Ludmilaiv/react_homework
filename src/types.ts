export type TAuthor = 'bot' | 'user';
type TMessage = {
  text: string; 
  authorName: string; 
  author: TAuthor; 
  id: string
};
export type TMessages = TMessage[];