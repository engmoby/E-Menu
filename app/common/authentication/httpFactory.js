"use strict";
var InterceptedHttp_1 = require("./InterceptedHttp");
function httpFactory(xhrBackend, requestOptions, authenticationService) {
    // var k =injector.get(AuthenticationService)
    return new InterceptedHttp_1.InterceptedHttp(xhrBackend, requestOptions, authenticationService);
}
exports.httpFactory = httpFactory;
//# sourceMappingURL=httpFactory.js.map