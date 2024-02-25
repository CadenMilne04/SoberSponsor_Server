const bodyParser = require('body-parser');
const express = require('express');

module.exports = function (app) {
  // Parse incoming requests with JSON payloads
  app.use(bodyParser.json());

  // Parse incoming requests with URL-encoded payloads
  app.use(bodyParser.urlencoded({ extended: true }));
};

