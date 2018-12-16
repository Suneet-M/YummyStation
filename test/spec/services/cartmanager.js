'use strict';

describe('Service: cartManager', function () {

  // load the service's module
  beforeEach(module('yummyStationApp'));

  // instantiate service
  var cartManager;
  beforeEach(inject(function (_cartManager_) {
    cartManager = _cartManager_;
  }));

  it('should do something', function () {
    expect(!!cartManager).toBe(true);
  });

});
