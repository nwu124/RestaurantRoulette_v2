db = db.getSiblingDB('rrData')
db.createCollection('savedLists')
listsCollection = db.getCollection("savedLists")
listsCollection.remove({})

listsCollection.insert(
    {
        userId: 1,
        favorites: [
            {
                restaurantId: 1
            },
            {
                restaurantId: 25
            },
            {
                restaurantId: 12
            },
            {
                restaurantId: 15
            },
            {
                restaurantId: 22
            }
        ],
        blocked: [
            {
                restaurantId: 2
            },
            {
                restaurantId: 11
            }
        ],
        history: [
            {
                restaurantId: 1
            },
            {
                restaurantId: 25
            },
            {
                restaurantId: 12
            },
            {
                restaurantId: 15
            },
            {
                restaurantId: 22
            },
            {
                restaurantId: 2
            },
            {
                restaurantId: 11
            }
        ]
    }
)

listsCollection.insert(
    {
        userId: 2,
        favorites: [
            {
                restaurantId: 9
            },
            {
                restaurantId: 19
            }
        ],
        blocked: [
            {
                restaurantId: 17
            },
            {
                restaurantId: 18
            }
        ],
        history: [
            {
                restaurantId: 9
            },
            {
                restaurantId: 19
            },
            {
                restaurantId: 17
            },
            {
                restaurantId: 18
            },
            {
                restaurantId: 15
            },
            {
                restaurantId: 24
            },
        ]
    }
)

listsCollection.insert(
    {
        userId: 3,
        favorites: [
            {
                restaurantId: 7
            },
            {
                restaurantId: 5
            },
            {
                restaurantId: 14
            }
        ],
        blocked: [
            {
                restaurantId: 2
            }
        ],
        history: [
            {
                restaurantId: 7
            },
            {
                restaurantId: 5
            },
            {
                restaurantId: 14
            },
            {
                restaurantId: 2
            },
            {
                restaurantId: 12
            }
        ]
    }
)

listsCollection.insert(
    {
        userId: 4,
        favorites: [
            {
                restaurantId: 4
            },
            {
                restaurantId: 16
            },
            {
                restaurantId: 22
            },
            {
                restaurantId: 25
            }
        ],
        blocked: [
            {
                restaurantId: 5
            },
            {
                restaurantId: 2
            }
        ],
        history: [
            {
                restaurantId: 4
            },
            {
                restaurantId: 16
            },
            {
                restaurantId: 22
            },
            {
                restaurantId: 25
            },
            {
                restaurantId: 5
            },
            {
                restaurantId: 2
            },
            {
                restaurantId: 7
            }
        ]
    }
)
