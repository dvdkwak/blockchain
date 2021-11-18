import { Blockchain } from "../Objects/Blockchain";
import { Block } from "../Objects/Block";

export class correctSetup {

  public static simulate(numberOfBlocks: number = 5, mineDificulty: number = 5): void {
    // initializing the blockchain
    let davidCoin = new Blockchain(mineDificulty);

    // mining a number of blocks
    for(let i = 0; i < numberOfBlocks; i++) {
      // getting current date for the block
      let date = new Date();
      let dateString = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();
      let timeString = date.getHours() + ':' + date.getMinutes();

      // getting a random number for the amount
      let amount = 1 + Math.floor(Math.random() * 999);

      // first block to be added
      let block: Block = new Block({
        date: dateString,
        time: timeString
      }, {
        from: 'Alfred',
        to: 'Benny',
        amount: amount
      });

      console.log('mining block...');

      // adding block to the chain (mining process)
      davidCoin.addBlock(block);
    }

    // showing chain
    console.log(davidCoin.chain);

    // showing validation of the chain
    console.log(`Chain is valid? ${davidCoin.validate()}`);
  }

}
