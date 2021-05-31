"use strict";
exports.__esModule = true;
exports.dataAccess = void 0;
var Mongoose = require("mongoose");
var dataAccess = /** @class */ (function () {
    function dataAccess() {
        dataAccess.connect();
    }
    dataAccess.connect = function () {
        if (this.mongooseInstance)
            return this.mongooseInstance;
        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.on("open", function () {
            console.log("Connected to mongodb.");
        });
        this.mongooseInstance = Mongoose.connect(this.DB_CONNECTION_STRING);
        return this.mongooseInstance;
    };
    // static DB_CONNECTION_STRING:string = 'mongodb://dbAdmin:test@localhost:3000/rrData?authSource=admin';
    dataAccess.DB_CONNECTION_STRING = 'mongodb+srv://test:user1@cluster0.dyy36.mongodb.net/rrData?retryWrites=true&w=majority';
    return dataAccess;
}());
exports.dataAccess = dataAccess;
dataAccess.connect();
