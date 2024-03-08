// Test helloworld-example using Jest

// Path: tests/test.js
// import function to test
const startServer = require('../index.js');
// import node.js http module
const http = require('http');
// import node.js assert module
const assert = require('assert');
// import supertest module
const request = require('supertest');

// import jest globals
const {
    describe,
    it,
    beforeAll,
    afterAll,
} = global;

// define server variable
let server;
// define port variable
const port = 8000;
// before test run server
beforeAll(function () {
    server = startServer();
});
// after test stop server
afterAll(function () {
    server.close();
});
// test for response code
describe('GET /', function () {
    it('respond with Hello World!', function (done) {
        // connect to server
        request(server)
            // send GET request
            .get('/')
            // check for 200 response
            .expect(200, done);
    });
});
// test for content type
describe('GET /', function () {
    it('respond with text', function (done) {
        // connect to server
        request(server)
            // send GET request
            .get('/')
            // check content-type is text/plain
            .expect('Content-Type', /text\/plain/, done);
    });
});
// test for response message
describe('GET /', function () {
    it('respond with Hello World!', function (done) {
        // connect to server
        request(server)
            // send GET request
            .get('/')
            // check response message
            .expect('Hello World\n', done);
    });
});