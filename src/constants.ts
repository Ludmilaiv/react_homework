import { Author } from './types';

export const AUTHOR: { BOT: Author; USER: Author } = {
  BOT: 'bot',
  USER: 'user',
};

export const api = 'https://api.spaceflightnewsapi.net/v3/articles';
