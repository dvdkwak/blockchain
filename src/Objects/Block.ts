import { Timestamp } from "../Interfaces/Timestamp";
import { Transaction } from "../Interfaces/Transaction";

const SHA256 = require('crypto-js/sha256');

/**
 * Blocks store data to keep track of a transaction.
 */
export class Block {

  public transaction: Transaction;
  public hash: string;
  public previousHash: string;
  private timestamp: Timestamp;
  private nonce: number = 0;


  /**
   * Constructor of the Block.
   * @param timestamp String with the date "dd/mm/yyyy".
   * @param transaction Transaction object.
   * @param previousHash String containing the hash value of the previous block.
   */
  constructor(timestamp: Timestamp, transaction: Transaction, previousHash: string = "0") {
    this.timestamp = timestamp;
    this.previousHash = previousHash;
    this.transaction = transaction;
    this.hash = this.calculateHash();
  }


  /**
   * Calculates a hash to use for the newly created block.
   */
  public calculateHash(): string {
    return SHA256(this.timestamp.toString() + this.previousHash + JSON.stringify(this.transaction) + this.nonce).toString();
  }

  /**
   * Method to set the hash with the calculateHash method
   */
  public setHash(): void {
    this.hash = this.calculateHash();
  }


  /**
   * Method to mine a new block for the blockChain.
   * @param difficulty 
   */
  public mine(difficulty: number): void {
    // Substract the first [difficulty] characters of the hash and see wether they are the same as [difficulty] number of zero's.
    while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
    // the right nonce has been found! time to mine!
    console.log('New block mined: ' + this.hash);
  }

}
