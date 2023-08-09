import { ChatGPTAPI } from 'chatgpt';

const globalForPrisma = global as unknown as { api: ChatGPTAPI };

export const gpt =
  globalForPrisma.api ||
  new ChatGPTAPI({
    apiKey: process.env.OPEN_AI,
    completionParams: {
      model: 'gpt-4',
    },
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.api = gpt;
