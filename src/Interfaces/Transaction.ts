/**
 * Transacinot is an interface for the transactions saved in blocks.
 * Requires from {string} (@todo: wallet address)
 * Requires to {string} (@todo: wallet address)
 * And amount {number}
 */
export interface Transaction {
  from: string;
  to: string;
  amount: Number;
}
