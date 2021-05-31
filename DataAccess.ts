import Mongoose = require("mongoose");

class dataAccess {
    static mongooseInstance: any;
    static mongooseConnection: Mongoose.Connection;
    // static DB_CONNECTION_STRING:string = 'mongodb://dbAdmin:test@localhost:3000/rrData?authSource=admin';
    static DB_CONNECTION_STRING:string = 'mongodb+srv://test:user1@cluster0.dyy36.mongodb.net/rrData?retryWrites=true&w=majority';

    constructor () {
        dataAccess.connect();
    }

    static connect (): Mongoose.Connection {
        if(this.mongooseInstance) return this.mongooseInstance;

        this.mongooseConnection  = Mongoose.connection;
        this.mongooseConnection.on("open", () => {
            console.log("Connected to mongodb.");
        });

        this.mongooseInstance = Mongoose.connect(this.DB_CONNECTION_STRING);
        return this.mongooseInstance;
    }

}
dataAccess.connect();
export {dataAccess};
