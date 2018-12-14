'use strict';

describe('Service: menuFetcher', function () {

  // load the service's module
  beforeEach(module('yummyStationApp'));

  // instantiate service
  var menuFetcher;
  beforeEach(inject(function (_menuFetcher_) {
    menuFetcher = _menuFetcher_;
  }));

  it('should do something', function () {
    expect(!!menuFetcher).toBe(true);
  });

});
