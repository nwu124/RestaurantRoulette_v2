db = db.getSiblingDB('rrData')
db.createCollection('restaurants')
tasksCollection = db.getCollection("restaurants")
tasksCollection.remove({})
tasksCollection.insert(
    {
        restaurantId: 1,
        name: "Buca Di Bbeppo",
        url: "https://www.bucadibeppo.com/",
        locationState: "WA",
        locationZip: 98109,
        locationCity: "Seattle",
        price: "$$",
        tags: ["Italian"],
        reviews: [
            {
                source: "Yelp",
                description: "Nice place",
                rating: 3
            },
            {
                source: "Google",
                description: ":/",
                rating: 2
            }
        ],
        feedback: [
            {
                userID: 1,
                comment: "I would go back",
                rating: 4
            }
        ]
    }
)

tasksCollection.insert(
    {
        restaurantId: 2,
        name: "Senor Moose",
        url: "https://www.elmoose.com/",
        locationState: "WA",
        locationZip: 98107,
        locationCity: "Seattle",
        price: "$$",
        tags: ["Mexican"],
        reviews: [
            {
                source: "Yelp",
                description: "I like it",
                rating: 5
            },
            {
                source: "Google",
                description: ":D",
                rating: 3
            }
        ],
        feedback: [
            {
                userID: 1,
                comment: "Not bad",
                rating: 4
            }
        ]
    }
)

tasksCollection.insert(
    {
        restaurantId: 3,
        name: "Ristorante Picolinos",
        url: "http://ristorantepicolinos.com/",
        locationState: "WA",
        locationZip: 98107,
        locationCity: "Seattle",
        price: "$$",
        tags: ["Italian", "Beer Garden", "Party & Event Planning"],
        reviews: [
            {
                source: "Yelp",
                description: "The atmosphere is excellent, if you can, choose outdoor seating. It's a covered patio that is an indoor-outdoor space. ",
                rating: 4
            },
            {
                source: "Yelp",
                description: "I am totally in love with this place! The food is AMAZING and the staff are very professional and kind. Picolinos is my new favorite Italian place! Highly recommend and pandemic approved :)",
                rating: 5
            },
            {
                source: "Google",
                description: "Really great ambience with plenty of heat, soft music, comfy seating, and a pretty scenery and table-setting. Perfect for outdoor dining safely during the winter cold or rain. ",
                rating: 5
            }
        ],
        feedback: [
            {
                userID: 4,
                comment: "Best goat cheese ravoli of all time.",
                rating: 5
            }
        ]
    }
)

tasksCollection.insert(
    {
        restaurantId: 4,
        name: "The Pink Door",
        url: "https://www.thepinkdoor.net/",
        locationState: "WA",
        locationZip: 98101,
        locationCity: "Seattle",
        price: "$$",
        tags: ["Italian", "Wine Bar", "Seafood"],
        reviews: [
            {
                source: "Yelp",
                description: "The Pink Door is a hidden gem in Seattle.",
                rating: 5
            },
            {
                source: "Yelp",
                description: "One word comes to mind when thinking of my experience at The Pink Door Restaurant... underwhelming.",
                rating: 3
            },
            {
                source: "Google",
                description: "Everything was really good!! The raviolis were vegetarian and a huge hit with the group.",
                rating: 4
            }
        ],
        feedback: [
            {
                userID: 2,
                comment: "Exceptional service!",
                rating: 4
            }
        ]
    }
)

tasksCollection.insert(
    {
        restaurantId: 5,
        name: "Assaggio Ristorante",
        url: "https://www.assaggioseattle.com/",
        locationState: "WA",
        locationZip: 98121,
        locationCity: "Seattle",
        price: "$$",
        tags: ["Italian", "Pizza"],
        reviews: [
            {
                source: "Yelp",
                description: "Best Italian in Seattle.  Ask for Roman.  Worth the wait.  Italian-family owned.  So glad it is re-opened.",
                rating: 5
            },
            {
                source: "Google",
                description: "Really good authentic Italian food. Service was excellent even though we didn't have a reservation. We had Bruschetta, Linguini and steak. No complaints.",
                rating: 5
            },
            {
                source: "Google",
                description: "Assaggio is yet another fave restaurant in Seattle - chef owned, small (i.e. intimate) and just a local gem.  ",
                rating: 4
            }
        ],
        feedback: [
            {
                userID: 1,
                comment: "Best pasta I've had in a while.",
                rating: 4.5
            }
        ]
    }
)

tasksCollection.insert(
    {
        restaurantId: 6,
        name: "Paul's Italian Kitchen",
        url: "http://www.paulsitaliankitchen.com/",
        locationState: "WA",
        locationZip: 98105,
        locationCity: "Seattle",
        price: "$",
        tags: ["Italian", "Pizza", "Bar", "Burgers"],
        reviews: [
            {
                source: "Yelp",
                description: "Very very basic, not Italian at all.",
                rating: 1
            },
            {
                source: "Yelp",
                description: "Here's the deal breaker though: their staff don't use gloves when preparing food!!",
                rating: 2
            },
            {
                source: "Google",
                description: "No salt on the fries, tasted like soggy cardboard.",
                rating: 1
            }
        ],
        feedback: [
            {
                userID: 3,
                comment: "Food isn't that great--chicken strips weren't that good, chicken nuggets were all right.",
                rating: 2
            }
        ]
    }
)

tasksCollection.insert(
    {
        restaurantId: 7,
        name: "Tacos Chukis",
        url: "https://www.seattlechukis.com/",
        locationState: "WA",
        locationZip: 98102,
        locationCity: "Seattle",
        price: "$",
        tags: ["Mexican", "Vegan"],
        reviews: [
            {
                source: "Yelp",
                description: "Easily some of the best tacos in Captiol Hill and highly recommended spot. ",
                rating: 5
            },
            {
                source: "Yelp",
                description: "Tacos here were taste delicious and fresh.",
                rating: 4
            }
        ],
        feedback: [
            {
                userID: 2,
                comment: "Absolutely delicious food and reasonable prices.",
                rating: 5
            }
        ]
    }
)

tasksCollection.insert(
    {
        restaurantId: 8,
        name: "Fogon Cocina Mexicana",
        url: "https://fogonseattle.com/",
        locationState: "WA",
        locationZip: 98122,
        locationCity: "Seattle",
        price: "$$",
        tags: ["Mexican"],
        reviews: [
            {
                source: "Yelp",
                description: "I could eat here multiple times a week. And I have.",
                rating: 5
            },
            {
                source: "Google",
                description: "Fog??n has consistently delicious food and friendly staff members.",
                rating: 4.5
            },
            {
                source: "Google",
                description: "Would definitely come back and I recommend it for anyone in Seattle looking for a good traditional Mexican place.",
                rating: 4
            }
        ],
        feedback: [
            {
                userID: 1,
                comment: "Great carne asada tacos.",
                rating: 4
            }
        ]
    }
)

tasksCollection.insert(
    {
        restaurantId: 9,
        name: "Asadero Ballard",
        url: "https://www.asaderoprime.com/",
        locationState: "WA",
        locationZip: 98107,
        locationCity: "Seattle",
        price: "$$$",
        tags: ["Mexican", "Steakhouse"],
        reviews: [
            {
                source: "Yelp",
                description: "Asadero is one of my favorite restaurants in Seattle. My favorite steak is the Vacio.",
                rating: 5
            },
            {
                source: "Yelp",
                description: "Made a reservation for 5:45pm. Was told at 6:05pm that our table inside was not ready.",
                rating: 3
            },
            {
                source: "Yelp",
                description: "If you want nothing more than a good steak for a reasonable price, Asadero has your back.",
                rating: 3.5
            }
        ],
        feedback: [
            {
                userID: 2,
                comment: "Good cuts of wagyu steak.",
                rating: 4
            }
        ]
    }
)

tasksCollection.insert(
    {
        restaurantId: 10,
        name: "Cactus Resteraurants",
        url: "https://cactusrestaurants.com/location/south-lake-union/",
        locationState: "WA",
        locationZip: 98109,
        locationCity: "Seattle",
        price: "$$",
        tags: ["Mexican", "Tex-Mex"],
        reviews: [
            {
                source: "Google",
                description: "The drinks are delicious. I got a mojito and they were very generous with the alcohol they put in it.",
                rating: 5
            },
            {
                source: "Google",
                description: "Love this place.  brunch menu has a good variety and were delicious. ",
                rating: 4.5
            }
        ],
        feedback: [
            {
                userID: 3,
                comment: "Wonderful service, delicious food.",
                rating: 5
            }
        ]
    }
)

tasksCollection.insert(
    {
        restaurantId: 11,
        name: "Carmelo's Tacos",
        url: "https://www.grubhub.com/restaurant/carmelos-tacos-110-summit-ave-e-seattle/2054622?utm_source=google&utm_medium=organic&utm_campaign=place-action-link",
        locationState: "WA",
        locationZip: 98102,
        locationCity: "Seattle",
        price: "$",
        tags: ["Mexican", "Food Stands", "Vegetarian"],
        reviews: [
            {
                source: "Yelp",
                description: "I've found my holy grail of tacos here in Seattle! ",
                rating: 5
            },
            {
                source: "Google",
                description: "Food was delicious, it was clear the tortillas were homemade and everything was cooked fresh.",
                rating: 4
            }
        ],
        feedback: [
            {
                userID: 4,
                comment: "They have tons of vegetarian options.",
                rating: 4
            }
        ]
    }
)

tasksCollection.insert(
    {
        restaurantId: 12,
        name: "Umi Sake House",
        url: "https://www.umisakehouse.com/",
        locationState: "WA",
        locationZip: 98121,
        locationCity: "Seattle",
        price: "$$",
        tags: ["Japanese", "Sushi Bar"],
        reviews: [
            {
                source: "Yelp",
                description: "One of my favorite sushi restaurants in the area. The menu is has lots of variety.",
                rating: 5
            },
            {
                source: "Yelp",
                description: "Unfortunately, the food did not meet our expectations, which really came as a shock to us because of all the good reviews.",
                rating: 3
            },
            {
                source: "Google",
                description: "Been here a few times now and the freshness and variety of both tuna and salmon sashimi are always on point.",
                rating: 4.5
            }
        ],
        feedback: [
            {
                userID: 1,
                comment: "My favorites are Cali Kristy, sweet shrimp nigiri and any salmon/toro sashimi.",
                rating: 4
            }
        ]
    }
)

tasksCollection.insert(
    {
        restaurantId: 13,
        name: "Momiji",
        url: "https://www.momijiseattle.com/",
        locationState: "WA",
        locationZip: 98122,
        locationCity: "Seattle",
        price: "$$",
        tags: ["Japanese", "Sushi Bar", "Asain Fusion"],
        reviews: [
            {
                source: "Yelp",
                description: "For the sushi lovers in Seattle I highly recommend coming here!",
                rating: 5
            },
            {
                source: "Google",
                description: "This was some of the best sushi we have ever had! Their menu is massive- food & drinks.",
                rating: 5
            }
        ],
        feedback: [
            {
                userID: 2,
                comment: "We got a bunch of rolls and a sake flight that I really enjoyed.",
                rating: 4
            }
        ]
    }
)

tasksCollection.insert(
    {
        restaurantId: 14,
        name: "Japonessa Sushi Cocina",
        url: "https://www.japonessa.com/",
        locationState: "WA",
        locationZip: 98101,
        locationCity: "Seattle",
        price: "$$",
        tags: ["Japanese", "Sushi Bar", "Cocktail Bars"],
        reviews: [
            {
                source: "Yelp",
                description: "This was my first time having Omakase and everything was SO GOOD AND SO FRESH.",
                rating: 5
            },
            {
                source: "Google",
                description: "I feel like this place was just ok. ",
                rating: 3
            }
        ],
        feedback: [
            {
                userID: 3,
                comment: " The miso soup was the best I've had.",
                rating: 4
            }
        ]
    }
)

tasksCollection.insert(
    {
        restaurantId: 15,
        name: "Sushi Kashiba",
        url: "https://sushikashiba.com/",
        locationState: "WA",
        locationZip: 98101,
        locationCity: "Seattle",
        price: "$$$$",
        tags: ["Japanese", "Sushi Bar"],
        reviews: [
            {
                source: "Yelp",
                description: "My experience at Sushi Kashiba was amazing.",
                rating: 5
            },
            {
                source: "Google",
                description: "Loved my first omakase at Shiros so I had to stop by Sushi Kashiba next time I was in town. ",
                rating: 4.5
            }
        ],
        feedback: [
            {
                userID: 1,
                comment: "I don't remember exactly what I got here, but every piece I had was absolutely delicious. ",
                rating: 5
            }
        ]
    }
)

tasksCollection.insert(
    {
        restaurantId: 16,
        name: "Fremont Bowl",
        url: "https://fremontbowl.com/",
        locationState: "WA",
        locationZip: 98103,
        locationCity: "Seattle",
        price: "$$",
        tags: ["Japanese", "Poke"],
        reviews: [
            {
                source: "Yelp",
                description: "Visiting from LA and this is probably the best chirashi bowl I've had. You can tell the quality of the fish is amazing",
                rating: 5
            },
            {
                source: "Google",
                description: "Picked up a Chirashi bowl, easy ordering and pick up process online! ",
                rating: 4
            }
        ],
        feedback: [
            {
                userID: 4,
                comment: "One of my go-to spots for their Sake Don and Chirashi Bowl.",
                rating: 4
            }
        ]
    }
)

tasksCollection.insert(
    {
        restaurantId: 17,
        name: "Theo's Gyros",
        url: "https://theosgyrosseattle.cafecityguide.website/",
        locationState: "WA",
        locationZip: 98101,
        locationCity: "Seattle",
        price: "$",
        tags: ["Greek", "Food truck"],
        reviews: [
            {
                source: "Yelp",
                description: "This food truck traveled South of Seattle today. It was awesome! Well deserved 4 stars.",
                rating: 4
            },
            {
                source: "Google",
                description: "The gyro was made to order with amazing sauce. The lamb was perfect. ",
                rating: 5
            }
        ],
        feedback: [
            {
                userID: 1,
                comment: "The beef & lamb had good flavor but was pretty thinly sliced.",
                rating: 4
            }
        ]
    }
)

tasksCollection.insert(
    {
        restaurantId: 18,
        name: "Voula's Offshore Cafe",
        url: "http://voulasoffshore.com/",
        locationState: "WA",
        locationZip: 98105,
        locationCity: "Seattle",
        price: "$$",
        tags: ["Greek", "Cafe", "Brunch"],
        reviews: [
            {
                source: "Yelp",
                description: "This is one of our favorite restaurants spots for breakfast.",
                rating: 5
            },
            {
                source: "Google",
                description: "Kitchen crew that provides amazing *breakfast* fare (never tried lunch) where entrees easily can be shared or enough for two meals.",
                rating: 4.5
            }
        ],
        feedback: [
            {
                userID: 2,
                comment: "I especially love their eggs Benedict.",
                rating: 4
            }
        ]
    }
)

tasksCollection.insert(
    {
        restaurantId: 19,
        name: "Vios Cafe",
        url: "http://www.vioscafe.com/capitol-hill/",
        locationState: "WA",
        locationZip: 98112,
        locationCity: "Seattle",
        price: "$$",
        tags: ["Greek", "Cafe"],
        reviews: [
            {
                source: "Yelp",
                description: "Fresh ingredients, delicious food, and compostable containers/napkin/bag.",
                rating: 5
            },
            {
                source: "Google",
                description: "All I can say is, based on reviews, I had high hopes - and they delivered. ",
                rating: 4.5
            }
        ],
        feedback: [
            {
                userID: 3,
                comment: "I've had both the hummus & chicken with lemon / rice soup and they're both delicious.",
                rating: 4
            }
        ]
    }
)

tasksCollection.insert(
    {
        restaurantId: 20,
        name: "The Golden Olive",
        url: "https://seattlegoldenolive.com/",
        locationState: "WA",
        locationZip: 98109,
        locationCity: "Seattle",
        price: "$",
        tags: ["Greek"],
        reviews: [
            {
                source: "Yelp",
                description: " I got the Gyro Plate ($12.50) and they prepared it within 5 minutes. The portion size was great.",
                rating: 5
            },
            {
                source: "Google",
                description: "Everything was delicious! Their dolma was the best I've had.",
                rating: 5
            }
        ],
        feedback: [
            {
                userID: 4,
                comment: "Kabob was especially delicious",
                rating: 4
            }
        ]
    }
)

tasksCollection.insert(
    {
        restaurantId: 21,
        name: "Omega Ouzeri",
        url: "https://www.omegaouzeri.com/",
        locationState: "WA",
        locationZip: 98112,
        locationCity: "Seattle",
        price: "$$$",
        tags: ["Greek", "Wine Bar"],
        reviews: [
            {
                source: "Yelp",
                description: "Top to bottom a 5-star experience. ",
                rating: 5
            },
            {
                source: "Google",
                description: "The mixed grill was perfect to try a variety of dishes.  The Greek salad was refreshing and pleasant.",
                rating: 4
            }
        ],
        feedback: [
            {
                userID: 1,
                comment: "All in all, the meal was unique and enjoyable.",
                rating: 4
            }
        ]
    }
)

tasksCollection.insert(
    {
        restaurantId: 22,
        name: "Bangrak Market",
        url: "https://www.bangrakmarket.com/",
        locationState: "WA",
        locationZip: 98121,
        locationCity: "Seattle",
        price: "$$",
        tags: ["Thai", "Bar", "Vegan"],
        reviews: [
            {
                source: "Yelp",
                description: "Literally my fav Thai food - I'm vegan and they have many tofu options.",
                rating: 5
            },
            {
                source: "Google",
                description: "Crying tiger. INCREDIBLE. Tender pieces of meat with a nice smoky flavor and perfectly seasoned.",
                rating: 4.5
            }
        ],
        feedback: [
            {
                userID: 2,
                comment: "The variety and dish is impressive.",
                rating: 4
            }
        ]
    }
)

tasksCollection.insert(
    {
        restaurantId: 23,
        name: "Palisade",
        url: "https://www.palisaderestaurant.com/",
        locationState: "WA",
        locationZip: 98199,
        locationCity: "Seattle",
        price: "$$$",
        tags: ["Seafood", "Steakhouse"],
        reviews: [
            {
                source: "Yelp",
                description: "The steak was also cooked to perfection, it was so delicious.",
                rating: 5
            },
            {
                source: "Google",
                description: "Had my Anniversary dinner with my girlfriend here and there couldn't have been a better spot.",
                rating: 5
            }
        ],
        feedback: [
            {
                userID: 3,
                comment: "The food is spectacular. ",
                rating: 4.5
            }
        ]
    }
)

tasksCollection.insert(
    {
        restaurantId: 24,
        name: "Thai Tom",
        url: "N/A",
        locationState: "WA",
        locationZip: 98105,
        locationCity: "Seattle",
        price: "$",
        tags: ["Thai", "Vegan"],
        reviews: [
            {
                source: "Yelp",
                description: "I have always loved Thai Tom, and over the years they are still consistent and awesome! T",
                rating: 5
            },
            {
                source: "Google",
                description: "Used to be absolutely the best Thai anywhere.  Still 5 star, but Something has changed lately though not sure what.  ",
                rating: 4
            }
        ],
        feedback: [
            {
                userID: 4,
                comment: "I get dreams about the Thai curry fried rice I ate here.",
                rating: 4
            }
        ]
    }
)

tasksCollection.insert(
    {
        restaurantId: 25,
        name: "Pest Rock",
        url: "https://pestlerock.com/",
        locationState: "WA",
        locationZip: 98107,
        locationCity: "Seattle",
        price: "$$",
        tags: ["Thai"],
        reviews: [
            {
                source: "Yelp",
                description: "The food taste good but if you have a family to feed, this place may break your bank.",
                rating: 3
            },
            {
                source: "Google",
                description: "This is my family's go-to Thai restaurant, and have gotten it to-go several times during the pandemic.",
                rating: 5
            }
        ],
        feedback: [
            {
                userID: 1,
                comment: "I really liked their Kao Soi.",
                rating: 4
            }
        ]
    }
)