interface IRestaurantModelAngular {
  restaurantId: number;
  name: string;
  url: string;
  locationState: string;
  locationZip: string;
  locationCity: string;
  price: string,
  tags: [
    string
  ],
  reviews: [{
    source: string;
    description: string;
    rating: number;
  }],
  feedback: [
    {
      userID: number,
      comment: string,
      rating: number
    }
  ];
}
export default IRestaurantModelAngular;
