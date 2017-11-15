'use strict';

/* eslint-disable no-param-reassign */

module.exports.hello = function (context) {
  context.res = {
    body: JSON.stringify({
      message: 'Hello World!'
    })
  };
  context.done();
};
