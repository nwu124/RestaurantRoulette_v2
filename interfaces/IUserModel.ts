import Mongoose = require("mongoose");

interface IUserModel extends Mongoose.Document {
    userId: number;
    loginType: string,
    firstname: string,
    lastname: string,
    email: string,
    photoUrl: string,
    lastLogin: string;
}
export {IUserModel};
