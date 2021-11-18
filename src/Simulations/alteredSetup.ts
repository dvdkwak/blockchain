import { Blockchain } from "../Objects/Blockchain";
import { Block } from "../Objects/Block";

export class alteredSetup {

  public static simulate(numberOfBlocks: number = 5, mineDificulty: number = 5) {
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
    console.log('current (correct) chain:');
    console.log(davidCoin.chain);
    console.log(`Chain is valid? ${davidCoin.validate()}`);

    // alter a block in the chain (Always the first block)
    davidCoin.chain[1].transaction = {
      from: 'wallet',
      to: 'Personal',
      amount: 1000000
    };

    // show chain and chain check
    console.log('altered (correct) chain:');
    console.log(davidCoin.chain);
    console.log(`Chain is valid? ${davidCoin.validate()}`);
  }

}
