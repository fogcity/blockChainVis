import { get } from './http';

export const querySingleBlock = async <T>(blockHash: string) => {
  return await get<T>(
    '/rawblock',
    {
      blockHash,
    },
    true
  );
};
export const querySingleTransaction = async <T>(txHash: string) => {
  return await get(
    '/rawtx',
    {
      txHash,
    },
    true
  );
};
