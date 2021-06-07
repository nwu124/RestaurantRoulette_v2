"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose = require("mongoose");
const DataAccess_1 = require("./../DataAccess");
let mongooseConnection = DataAccess_1.dataAccess.mongooseConnection;
let mongooseObj = DataAccess_1.dataAccess.mongooseInstance;
class userModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
        this.schema = new Mongoose.Schema({
            userId: Number,
            loginType: String,
            firstname: String,
            lastname: String,
            email: String,
            photoUrl: String,
            lastLogin: String,
        }, { collection: 'users' });
    }
    createModel() {
        this.model = mongooseConnection.model("User", this.schema);
    }
    retrieveUserDetails(response, filter) {
        var query = this.model.findOne(filter);
        query.exec((err, itemArray) => {
            response.json(itemArray);
        });
    }
    retrieveAllUsers(response) {
        var query = this.model.find({});
        query.exec((err, itemArray) => {
            response.json(itemArray);
        });
    }
}
exports.userModel = userModel;
