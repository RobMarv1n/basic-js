const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    switch (value) {
      case undefined:
        this.chain.push(`(  )`);
        break;
      default:
        this.chain.push(`( ${String(value)} )`);
        break;
    };
    return this;
  },
  removeLink(position) {
    if (position <= 0 || position > this.chain.length || typeof position !== 'number') {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const assembledChain = this.chain.join('~~');
    this.chain = [];
    return assembledChain;
  }
};

module.exports = {
  chainMaker
};
