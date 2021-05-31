import Mongoose = require("mongoose");
import {dataAccess} from './../DataAccess';
import {IRestaurantModel} from '../interfaces/IRestaurantModel';

let mongooseConnection = dataAccess.mongooseConnection;
let mongooseObj = dataAccess.mongooseInstance;

class restaurantModel {
    public schema: any;
    public innerSchema: any;
    public model: any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                restaurantId: Number,
                name: String,
                url: String,
                locationState: String,
                locationZip: String,
                locationCity: String,
                price: String,
                tags: [
                   String
                ],
                reviews: [
                    {
                        source: String,
                        description: String,
                        rating: Number
                    }
                ],
                feedback: [
                    {
                        userId: Number,
                        comment: String,
                        rating: Number
                    }
                ]
            }, {collection: 'restaurants'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IRestaurantModel>("Restaurant", this.schema);
    }

    public retrieveRestaurantDetails(response: any, filter: Object) {
        var query = this.model.findOne(filter);
        query.exec((err, itemArray) => {
            response.json(itemArray);
        });
    }

    public retrieveAllRestaurants(response: any): any {
        var query = this.model.find({});
        query.exec((err, itemArray) => {
            response.json(itemArray);
        });
    }

}

export {restaurantModel};