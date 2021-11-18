import { Block } from "./Block";

/**
 * Blockchain is the class which tracks a chain of blocks and which validates the chain.
 */
export class Blockchain {

  // the chain of blocks
  public chain: Array<Block>;
  private difficulty: number = 0;

  /**
   * Constructor to set the genesis block of the chain.
   * @param difficulty [number] Difficulty of de blockchain, default is 5.
   */
  constructor(difficulty: number = 5) {
    this.difficulty = difficulty;
    this.chain = [this.createGenesisBlock()];
  }


  /**
   * creating the genesis block to add to the chain. (gets called in the constructor)
   * @returns {Block} Block element which is used as the Genesis block
   */
  private createGenesisBlock(): Block {
    return new Block({
      date: '00-00-0000',
      time: '00:00'
    }, {
      from: 'system', 
      to: 'system', 
      amount: 0
    });
  }


  /**
   * Get the latest block of the chain.
   * @returns {Block} Latest block of the chain.
   */
  public getLatestBlock(): Block {
    return this.chain[this.chain.length - 1];
  }


  /**
   * Adds a new block to the chain.
   * @param block Block element
   */
  public addBlock(block: Block) {
    block.previousHash = this.getLatestBlock().hash;
    block.mine(this.difficulty);
    this.chain.push(block);
  }


  /**
   * Method to validate the blockchain. (See inside for validations.)
   * @returns {Boolean} With succes.
   */
  public validate(): boolean {
    // foreach block in the chain, starting index 1 (since check starts with second block)
    for(let i = 1; i < this.chain.length; i++) {
      let currentBlock: Block = this.chain[i];
      let previousBlock: Block = this.chain[i - 1];

      // checking wether the set hash is the same as the output of calculated hash
      if(currentBlock.hash !== currentBlock.calculateHash()) {
        console.error('The calculated hash does not confirm to the set hash.');
        return false;
      }

      // checking wether the previous hash matches with hash of the previous block
      if(currentBlock.previousHash !== previousBlock.hash) {
        console.error('Block previous hash does not match the hash of the previous block.');
        return false;
      }
    }

    // no errors found so the chain is valid! :D
    return true;
  }

}
