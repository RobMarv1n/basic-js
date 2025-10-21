const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  constructor (direct) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error("Incorrect arguments!");
    const alphabet = this.alphabet;
    const repeat = Math.ceil(message.length / key.length);
    key = key.toUpperCase().repeat(repeat);
    message = message.toUpperCase();

    let encryptedMessage;
    let i = -1;
    encryptedMessage = message.replace(/[A-Z]/gi, (w) => {
        i += 1;
        return alphabet[(alphabet.indexOf(w) + alphabet.indexOf(key[i])) % alphabet.length];
      });
      return this.direct === undefined ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) throw new Error("Incorrect arguments!");
    const alphabet = this.alphabet;
    const repeat = Math.ceil(encryptedMessage.length / key.length);
    key = key.toUpperCase().repeat(repeat);
    encryptedMessage = encryptedMessage.toUpperCase();

    let message;
    let i = -1;
    message = encryptedMessage.replace(/[A-Z]/gi, (w) => {
        i += 1;
        return alphabet[(alphabet.indexOf(w) - alphabet.indexOf(key[i]) + alphabet.length) % alphabet.length];
      });
    return this.direct === undefined ? message : message.split('').reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
