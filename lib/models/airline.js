'use strict';

const Document = require('camo').Document;

class Airline extends Document {
  constructor() {
    super();

    this.name = String;
    this.iata = String;
    this.icao = String;
    this.country = String;
  }

  static collectionName() {
    return 'airlines';
  }
}

module.exports = Airline;
