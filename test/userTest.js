var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

var url = 'https://rrwebappsu.azurewebsites.net';

before(function (done) {
  // fetch single user
  chai.request(url)
    .get("/app/user/1")
    .end(function (err, res) {
      singleUserResponse = res;
      expect(err).to.be.null;
      expect(res).to.have.status(200);
    });

  // fetch all users
  chai.request(url)
    .get("/app/user")
    .end(function (err, res) {
      listUserResponse = res;
      expect(err).to.be.null;
      expect(res).to.have.status(200);
    });

  setTimeout(function(){
    done();
  },1500)
});

describe('User Tests', function() {
  describe('Single User Validation', function() {
    it('Validate response status', function() {
      expect(singleUserResponse).to.have.status(200);
    });
    it('Validate user fields', function() {
      expect(singleUserResponse.body).to.have.property('_id').to.be.a('string');
      expect(singleUserResponse.body).to.have.property('userId').to.be.a('number');
      expect(singleUserResponse.body).to.have.property('username').to.be.a('string');
      expect(singleUserResponse.body).to.have.property('password').to.be.a('string');
      expect(singleUserResponse.body).to.have.property('loginStatus').to.be.a('number');
      expect(singleUserResponse.body).to.have.property('lastLogin').to.be.a('string');
    });
    it('Validate user values', function() {
      expect(singleUserResponse.body).to.have.property('_id');
      expect(singleUserResponse.body).to.have.property('userId').to.equal(1);
      expect(singleUserResponse.body).to.have.property('username').to.equal('Nathan');
      expect(singleUserResponse.body).to.have.property('password').to.equal('pw1');
      expect(singleUserResponse.body).to.have.property('loginStatus').to.equal(0);
      expect(singleUserResponse.body).to.have.property('lastLogin').to.equal('05-1-2021');
    });
  });
  describe('User List Validation', function() {
    it('Validate response status', function() {
      expect(listUserResponse).to.have.status(200);
    });
    it('Validate that list length is over 1', function() {
      expect(listUserResponse.body).to.have.length.above(1);
    });
    it('Validate all entry\'s fields', function() {
      for (i = 0; i < listUserResponse.body.length; i++) {
        expect(listUserResponse.body[i]).to.have.property('_id').to.be.a('string');
        expect(listUserResponse.body[i]).to.have.property('userId').to.be.a('number');
        expect(listUserResponse.body[i]).to.have.property('username').to.be.a('string');
        expect(listUserResponse.body[i]).to.have.property('password').to.be.a('string');
        expect(listUserResponse.body[i]).to.have.property('loginStatus').to.be.a('number');
        expect(listUserResponse.body[i]).to.have.property('lastLogin').to.be.a('string');
      }
    });
  });
});
