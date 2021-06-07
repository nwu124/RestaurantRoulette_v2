var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
var postUserResponse = require("mocha");
chai.use(chaiHttp);

var url = 'https://rrwebappsu.azurewebsites.net';

before(function (done) {
    // post new User
    chai.request(url)
        .post("/app/user")
        .send(
            {
                "userId": 9999,
                "loginType": "loginType_test",
                "firstname": "firstname_test",
                "lastname": "lastname_test",
                "email": "email_test",
                "photoUrl": "photoUrl_test",
                "lastLogin": "lastLogin_test"
            }
        )
        .end(function (err, res) {
            postUserResponse = res;
            expect(err).to.be.null;
            expect(res).to.have.status(200);
        });
    setTimeout(function(){
        done();
    },1500)
});

describe('Post User Tests', function() {
    it('Validate response status', function() {
        expect(postUserResponse).to.have.status(200);
    });
    it('Validate created User', function() {
        var response = JSON.parse(postUserResponse.text);

        expect(response).to.have.property('userId');
        expect(response).to.have.property('loginType').to.equal('loginType_test');
        expect(response).to.have.property('firstname').to.equal('firstname_test');
        expect(response).to.have.property('lastname').to.equal('lastname_test');
        expect(response).to.have.property('email').to.equal('email_test');
        expect(response).to.have.property('photoUrl').to.equal('photoUrl_test');
        expect(response).to.have.property('lastLogin').to.equal('lastLogin_test');
    });
});
