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
  // fetch single SavedList
  chai.request(url)
    .get("/app/savedlist/1")
    .end(function (err, res) {
      singleSavedListResponse = res;
      expect(err).to.be.null;
      expect(res).to.have.status(200);
    });

  // fetch all SavedLists
  chai.request(url)
    .get("/app/savedlist")
    .end(function (err, res) {
      listSavedListResponse = res;
      expect(err).to.be.null;
      expect(res).to.have.status(200);
    });

  setTimeout(function(){
    done();
  },1500)
});

describe('SavedList Tests', function() {
  describe('Single SavedList Validation', function() {
    it('Validate response status', function() {
      expect(singleSavedListResponse).to.have.status(200);
    });
    it('Validate SavedList fields', function() {
      expect(singleSavedListResponse.body).to.have.property('favorites');
      expect(singleSavedListResponse.body).to.have.property('blocked');
      expect(singleSavedListResponse.body).to.have.property('history');
    });
  });
  describe('SavedList List Validation', function() {
    it('Validate response status', function() {
      expect(listSavedListResponse).to.have.status(200);
    });
    it('Validate that list length is over 1', function() {
      expect(listSavedListResponse.body).to.have.length.above(1);
    });
    it('Validate all entry\'s fields', function() {
      for (i = 0; i < listSavedListResponse.body.length; i++) {
        expect(listSavedListResponse.body[i]).to.have.property('favorites');
        expect(listSavedListResponse.body[i]).to.have.property('blocked');
        expect(listSavedListResponse.body[i]).to.have.property('history');
      }
    });
  });
});
