db = db.getSiblingDB('rrData')
db.createCollection('users')
listsCollection = db.getCollection("users")
listsCollection.remove({})

listsCollection.insert(
    {
        userId: 1,
        username: "Nathan",
        password: "pw1",
        loginStatus: 0,
        lastLogin: "05-1-2021"
    }
)

listsCollection.insert(
    {
        userId: 2,
        username: "Adam",
        password: "pw2",
        loginStatus: 0,
        lastLogin: "04-30-2021"
    }
)

listsCollection.insert(
    {
        userId: 3,
        username: "Ben",
        password: "pw3",
        loginStatus: 0,
        lastLogin: "05-3-2021"
    }
)

listsCollection.insert(
    {
        userId: 4,
        username: "Madeline",
        password: "pw4",
        loginStatus: 0,
        lastLogin: "04-28-2021"
    }
)