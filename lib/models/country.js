'use strict';

const Document = require('camo').Document;

class Country extends Document {
  constructor() {
    super();
    this.name = String;
    this.codeIsoA2 = String;
    this.codeIsoA3 = String;
    this.codeIsoNumber = String;
  }

  static collectionName() {
    return 'countries';
  }
}

module.exports = Country;
