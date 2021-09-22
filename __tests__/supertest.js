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
  real = {username: 'Rachel', password: '123'};
  dummy = {username: 'Rachel', password: 'no'};
  describe('/users', () => {
    describe('GET', () => {
      it('responds with 200 status and application/json content type', () => request(server)
        .get('/users')
        .expect('Content-Type', /application\/json/)
        .expect(200));
    })
  })
  describe('/users/login', () => {
    describe('POST', () => {
      it('responds with 200 status and text/html charset=utf-8 content type', () => request(server)
        .post('/users/login')
        .send(real)
        .expect('Content-Type', "text/html; charset=utf-8")
        .expect(200));
    })
    describe('POST', () => {
      it('responds with 404 status and text/html charset=utf-8 content type', () => request(server)
        .post('/users/login')
        .send(dummy)
        .expect('Content-Type', "text/html; charset=utf-8")
        .expect(404));
    })
  })
  newUser = {username: 'Test', password: '123'};
  noPass = { username: 'Test2' };
  describe('/users/create', () => {
    describe('POST', () => {
      it('responds with 200 status and text/html; charset=utf-8 content type', () => request(server)
        .post('/users/create')
        .send(newUser)
        .expect('Content-Type', "text/html; charset=utf-8")
        .expect(200));
    })
    describe('POST', () => {
      it('responds with 400 status and text/html; charset=utf-8 content type', () => request(server)
        .post('/users/create')
        .send(noPass)
        .expect('Content-Type', /application\/json/)
        .expect(400));
    })
  })

  describe('/users/Test'  , () => {
    describe('DELETE', () => {
      it('should delete user "test"', () => request(server)
        .delete(`/users/${{username: 'Test'}}`)
        .query({username: 'Test'})
        .expect('Content-Type', "application/json; charset=utf-8")
        .expect(200)
    )})
  })
});