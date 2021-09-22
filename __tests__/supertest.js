const request = require("supertest");
// const mongoose = require("mongoose")
// const app = require("../server")

// const fs = require('fs');
// const path = require('path')
// npm install -g --save-dev jest supertest

const server = 'http://localhost:3000';

describe('Route integration', () => {

  describe ('/', ()=> {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => request(server)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200));
    });
  });

  describe('/users', () => {
    describe('GET', () => {
      it('responds with 200 status and application/json content type', () => request(server)
        .get('/users')
        .expect('Content-Type', /application\/json/)
        .expect(200));
    })
  })

});
