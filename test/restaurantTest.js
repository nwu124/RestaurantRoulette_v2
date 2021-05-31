var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

before(function (done) {
  // fetch single restaurant
  chai.request("http://localhost:8080")
    .get("/app/restaurant/1")
    .end(function (err, res) {
      singleRestaurantResponse = res;
      expect(err).to.be.null;
      expect(res).to.have.status(200);
    });

  // fetch all restaurants
  chai.request("http://localhost:8080")
    .get("/app/restaurant")
    .end(function (err, res) {
      listRestaurantResponse = res;
      expect(err).to.be.null;
      expect(res).to.have.status(200);
    });

  setTimeout(function(){
    done();
    },1000)
});

describe('Restaurant Tests', function() {
  describe('Single Restaurant Validation', function() {
    it('Validate response status', function() {
      expect(singleRestaurantResponse).to.have.status(200);
    });
    it('Validate restaurant fields', function() {
      expect(singleRestaurantResponse.body).to.have.property('_id').to.be.a('string');
      expect(singleRestaurantResponse.body).to.have.property('restaurantId').to.be.a('number');
      expect(singleRestaurantResponse.body).to.have.property('name').to.be.a('string');
      expect(singleRestaurantResponse.body).to.have.property('url').to.be.a('string');
      expect(singleRestaurantResponse.body).to.have.property('locationState').to.be.a('string');
      expect(singleRestaurantResponse.body).to.have.property('locationZip').to.be.a('string');
      expect(singleRestaurantResponse.body).to.have.property('locationCity').to.be.a('string');
      expect(singleRestaurantResponse.body).to.have.property('price').to.be.a('string');

      expect(singleRestaurantResponse.body).to.have.property('tags');
      expect(singleRestaurantResponse.body).to.have.property('reviews');
      expect(singleRestaurantResponse.body).to.have.property('feedback');
    });
    it('Validate restaurant values', function() {
      expect(singleRestaurantResponse.body).to.have.property('restaurantId').to.equal(1);
      expect(singleRestaurantResponse.body).to.have.property('name').to.equal('Buca Di Bbeppo');
      expect(singleRestaurantResponse.body).to.have.property('url').to.equal('https://www.bucadibeppo.com/');
      expect(singleRestaurantResponse.body).to.have.property('locationState').to.equal('WA');
      expect(singleRestaurantResponse.body).to.have.property('locationZip').to.equal('98109');
      expect(singleRestaurantResponse.body).to.have.property('locationCity').to.equal('Seattle');
      expect(singleRestaurantResponse.body).to.have.property('price').to.equal('$$');
    });
  });

  describe('Restaurant List Validation', function() {
    it('Validate response status', function() {
      expect(listRestaurantResponse).to.have.status(200);
    });
    it('Validate that list length is over 1', function() {
      expect(listRestaurantResponse.body).to.have.length.above(1);
    });
    it('Validate all entry\'s fields', function() {
      for (i = 0; i < listRestaurantResponse.body.length; i++) {
        expect(listRestaurantResponse.body[i]).to.have.property('_id').to.be.a('string');
        expect(listRestaurantResponse.body[i]).to.have.property('restaurantId').to.be.a('number');
        expect(listRestaurantResponse.body[i]).to.have.property('name').to.be.a('string');
        expect(listRestaurantResponse.body[i]).to.have.property('url').to.be.a('string');
        expect(listRestaurantResponse.body[i]).to.have.property('locationState').to.be.a('string');
        expect(listRestaurantResponse.body[i]).to.have.property('locationZip').to.be.a('string');
        expect(listRestaurantResponse.body[i]).to.have.property('locationCity').to.be.a('string');
        expect(listRestaurantResponse.body[i]).to.have.property('price').to.be.a('string');

        expect(listRestaurantResponse.body[i]).to.have.property('tags');
        expect(listRestaurantResponse.body[i]).to.have.property('reviews');
        expect(listRestaurantResponse.body[i]).to.have.property('feedback');
      }
    });
  });
});
