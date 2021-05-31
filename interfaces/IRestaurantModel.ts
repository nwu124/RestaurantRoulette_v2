import Mongoose = require("mongoose");

interface IRestaurantModel extends Mongoose.Document {
  restaurantId: number;
  name: string;
  url: string;
  locationState: string;
  locationZip: string;
  locationCity: string;
  price: string;
  tags: [
    string
  ];
  reviews: [{
    source: string;
    description: string;
    rating: number;
  }];
  feedback: [
    {
      userId: number;
      comment: string;
      rating: number;
    }
  ];
}

export {IRestaurantModel};
