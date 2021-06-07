"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose = require("mongoose");
class dataAccess {
    constructor() {
        dataAccess.connect();
    }
    static connect() {
        if (this.mongooseInstance)
            return this.mongooseInstance;
        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.on("open", () => {
            console.log("Connected to mongodb.");
        });
        this.mongooseInstance = Mongoose.connect(this.DB_CONNECTION_STRING);
        return this.mongooseInstance;
    }
}
// static DB_CONNECTION_STRING:string = 'mongodb://dbAdmin:test@localhost:3000/rrData?authSource=admin';
dataAccess.DB_CONNECTION_STRING = 'mongodb+srv://test:user1@cluster0.dyy36.mongodb.net/rrData?retryWrites=true&w=majority';
exports.dataAccess = dataAccess;
dataAccess.connect();
