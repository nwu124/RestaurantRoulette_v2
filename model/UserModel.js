"use strict";
exports.__esModule = true;
exports.userModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.dataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.dataAccess.mongooseInstance;
var userModel = /** @class */ (function () {
    function userModel() {
        this.createSchema();
        this.createModel();
    }
    userModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            userId: Number,
            loginType: String,
            firstname: String,
            lastname: String,
            email: String,
            photoUrl: String,
            lastLogin: String
        }, { collection: 'users' });
    };
    userModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("User", this.schema);
    };
    userModel.prototype.retrieveUserDetails = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    userModel.prototype.retrieveAllUsers = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return userModel;
}());
exports.userModel = userModel;
