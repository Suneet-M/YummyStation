'use strict';

describe('Service: itemFetcher', function () {

  // load the service's module
  beforeEach(module('yummyStationApp'));

  // instantiate service
  var itemFetcher;
  beforeEach(inject(function (_itemFetcher_) {
    itemFetcher = _itemFetcher_;
  }));

  it('should do something', function () {
    expect(!!itemFetcher).toBe(true);
  });

});
