'use strict';

class PAC {
  /**
   * PAC -> Private Automated Certification Class
   * Used to encapsulate PAC objects
   */

  /**
   * Constructor for the PAC Class
   * @param {*} pacID 
   * @param {*} quoteHash 
   * @param {*} otk 
   */
  constructor(pacID, quoteHash, otk) {
    this.pacID = pacID;
    this.quoteHash = quoteHash;
    this.otk = otk;

    return this;
  }
}

module.exports = PAC;
