export type BlockChainQueryError = { error?: object; message?: object };
export type TransactionInput = {
  prev_out: {
    hash: string;
    value: string;
    tx_index: string;
    n: string;
  };
  script: string;
};
export type TransactionOut = {
  value: string;
  hash: string;
  script: string;
};
export type Transaction = {
  hash: string;
  ver: number;
  vin_sz: number;
  vout_sz: number;
  lock_time: string;
  size: number;
  relayed_by: string;
  block_height: number;
  tx_index: string;
  inputs: TransactionInput[];
  out: TransactionOut[];
};
export type Block = {
  hash: string;
  ver: number;
  prev_block: string;
  mrkl_root: string;
  time: number;
  bits: number;
  nonce: number;
  n_tx: number;
  size: number;
  block_index: number;
  main_chain: true;
  height: number;
  received_time: number;
  relayed_by: string;
  tx: Transaction[];
};
