import Mongoose = require("mongoose");
import {dataAccess} from './../DataAccess';
import {ISavedListModel} from '../interfaces/ISavedListModel';
import { STATUS_CODES } from "http";

let mongooseConnection = dataAccess.mongooseConnection;
let mongooseObj = dataAccess.mongooseInstance;

class savedListModel {
    public schema:any;
    public innerSchema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                userId: Number,
                favorites: [
                    {
                        restaurantId: Number,
                    }
                ],
                blocked: [
                    {
                        restaurantId: Number,
                    }
                ],
                history: [
                    {
                        restaurantId: Number,
                    }
                ]
            }, {collection: 'savedLists'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<ISavedListModel>("SavedList", this.schema);
    }
    
    public retrieveSavedListDetails(response:any, filter:Object) {
        var query = this.model.findOne(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }

    public retrieveAllSavedLists(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }

}
export {savedListModel};
