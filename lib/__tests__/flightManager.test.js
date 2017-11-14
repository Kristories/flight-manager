const fm = require('../index.js');

test('searchAirline', () => {
  fm.searchAirline('garuda', function(items) {
    expect(items).toEqual([]);
  });
});

test('getAirlineByIata', () => {
  fm.getAirlineByIata('ga', function(item) {
    expect(item).toEqual({ name: 'Garusda Indonesia', iata: 'GA', icao: 'GIA' });
  });
});

test('getAirlineByIcao', () => {
  fm.getAirlineByIcao('gia', function(item) {
    expect(item).toEqual({ name: 'Garuda Indonesia', iata: 'GA', icao: 'GIA' });
  });
});
