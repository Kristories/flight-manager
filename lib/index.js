'use strict';

var path = require('path');
var connect = require('camo').connect;
var dataPath = path.join(__dirname, 'data');
var uriConnection = 'nedb://' + dataPath;
var Airline = require('./models/airline');
var Country = require('./models/country');
var _ = require('underscore');
var async = require('async');
var database = null;

/**
 * Search airline
 * @param  {String}   name
 * @param  {Function} callback
 * @return {Array}
 */
exports.searchAirline = (name, callback) => {
  connect(uriConnection)
    .then(function(db) {
      database = db;
      var res = [];
      var query = {
        $or: [
          { name: new RegExp(name, 'i') },
          { iata: new RegExp(name, 'i') },
          { icao: new RegExp(name, 'i') }
        ]
      };

      Airline.find(query).then(function(airlines) {
        async.eachOf(
          airlines,
          function(airline, key, cb) {
            if (airlines) {
              Country.findOne({ _id: airline.country }).then(function(country) {
                var data = _.extend(_.pick(airline, 'name', 'iata', 'icao'), {
                  country: _.pick(
                    country,
                    'name',
                    'codeIsoA2',
                    'codeIsoA3',
                    'codeIsoNumber'
                  )
                });
                res.push(data);
                cb();
              });
            }
          },
          function() {
            callback(_.sortBy(res, 'name'));
          }
        );
      });
    })
    .catch(err => {
      callback(err);
    });
};

/**
 * Get airline by IATA code
 * @param  {String}   name
 * @param  {Function} callback
 * @return {Array}
 */
exports.getAirlineByIata = (name, callback) => {
  connect(uriConnection)
    .then(function(db) {
      database = db;
      var query = { iata: new RegExp(name, 'i') };

      Airline.findOne(query, { populate: true }).then(function(airline) {
        if (airline) {
          Country.findOne({ _id: airline.country }).then(function(country) {
            var data = _.extend(_.pick(airline, 'name', 'iata', 'icao'), {
              country: _.pick(
                country,
                'name',
                'codeIsoA2',
                'codeIsoA3',
                'codeIsoNumber'
                )
            });
            callback(data);
          });
        } else {
          callback({});
        }
      });
    })
    .catch(err => {
      callback(err);
    });
};

/**
 * Get airline by ICAO code
 * @param  {String}   name
 * @param  {Function} callback
 * @return {Array}
 */
exports.getAirlineByIcao = (name, callback) => {
  connect(uriConnection)
    .then(function(db) {
      database = db;
      var query = { icao: new RegExp(name, 'i') };

      Airline.findOne(query, { populate: true }).then(function(airline) {
        if (airline) {
          Country.findOne({ _id: airline.country }).then(function(country) {
            var data = _.extend(_.pick(airline, 'name', 'iata', 'icao'), {
              country: _.pick(
                country,
                'name',
                'codeIsoA2',
                'codeIsoA3',
                'codeIsoNumber'
                )
            });
            callback(data);
          });
        } else {
          callback({});
        }
      });
    })
    .catch(err => {
      callback(err);
    });
};
