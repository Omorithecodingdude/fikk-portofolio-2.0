const http = require("node:http");

if (http && http.IncomingMessage && http.IncomingMessage.prototype) {
  const origAddHeaderLine = http.IncomingMessage.prototype._addHeaderLine;
  if (typeof origAddHeaderLine === "function") {
    http.IncomingMessage.prototype._addHeaderLine = function (...args) {
      const ret = origAddHeaderLine.apply(this, args);
      if (this.headers && Object.getPrototypeOf(this.headers) === null) {
        Object.setPrototypeOf(this.headers, Object.prototype);
      }
      return ret;
    };
  }
}
