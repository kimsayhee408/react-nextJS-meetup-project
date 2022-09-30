// API routes:
// locating this file (new-meetup.js) inside this special "api" folder inside "pages" -- can use Next JS API routes feature -- to create our own "back-end" API route.

// i.e. in other parts of our app, we will be able to send requests to domain.com/api/new-meetup, and then Next will trigger the function inside this file (typically called 'handler').

// because API routes will only run on the server
// never on the client.
// Decoding them will never be exposed to the client.
// So we can also use credentials
// in API routes without compromising them.

// https://www.mongodb.com/docs/manual/core/databases-and-collections/

import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://sayhee:cHX2Z3egDUBh7EY8@cluster0.saffl6d.mongodb.net/ReactNextMeetups?retryWrites=true&w=majority" // ReactNextMeetups is the name of the db I am establishing a connection to. If it doesn't exist yet, this will create a db of that name in my cluster.
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    //  this is name of collection

    const result = await meetupsCollection.insertOne(data); //asynv

    console.log(result);
    //ex. output:
    // {
    //         acknowledged: true,
    //         insertedId: new ObjectId("6336203a986a103d25995f19")
    //   }

    client.close();

    res.status(201).json({ message: "Meetup inserted!" }); // adds a status code of 201 and message to the response object
  }
}

export default handler;

//   ultimately, we also need to send back a response then.

// And we do this with this response object.

// Now, this works similar to what you might be used to

// from Node Express.

// You have a status method,

// which you can call on response

// to set a HTTP status code

// of the response which will be returned.

// For example, a 201 status code

// to indicate that something was inserted successfully.

// You can then chain a JSON call here

// to prepare the JSON data that will be added

// to the outgoing response.

// And here we could, for example, add a message key

// where we say Meetup inserted!
