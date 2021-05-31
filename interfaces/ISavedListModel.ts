import Mongoose = require("mongoose");

interface ISavedListModel extends Mongoose.Document {
    userID: number;
    favorites: [ {
        restaurantId: number;
    }];
    blocked: [ {
        restaurantId: number;
    }];
    history: [ {
        restaurantId: number;
    }];
}
export {ISavedListModel};
