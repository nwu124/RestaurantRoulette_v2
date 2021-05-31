import Mongoose = require("mongoose");

interface IUserModel extends Mongoose.Document {
    userId: number;
    username: string;
    password: string;
    loginStatus: number;
    lastLogin: string;
}
export {IUserModel};