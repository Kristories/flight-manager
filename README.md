# flight-manager [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url] 
>  
 
## Installation 
 
```sh 
$ npm install --save flight-manager 
``` 
 
## Usage 
 
```js 
const fm = require('flight-manager'); 

fm.searchAirline('indonesia', function(res) {
  console.log(res);
});

fm.getAirlineByIata('ga', function(res) {
  console.log(res);
});

fm.getAirlineByIcao('GIA', function(res) {
  console.log(res);
});
``` 
## License 
 
MIT © [Wahyu Kristianto](http://wahyukristianto.com) 
 
 
[npm-image]: https://badge.fury.io/js/flight-manager.svg 
[npm-url]: https://npmjs.org/package/flight-manager 
[travis-image]: https://travis-ci.org/Kristories/flight-manager.svg?branch=master 
[travis-url]: https://travis-ci.org/Kristories/flight-manager 
[daviddm-image]: https://david-dm.org/Kristories/flight-manager.svg?theme=shields.io 
[daviddm-url]: https://david-dm.org/Kristories/flight-manager 
[coveralls-image]: https://coveralls.io/repos/Kristories/flight-manager/badge.svg 
[coveralls-url]: https://coveralls.io/r/Kristories/flight-manager 
