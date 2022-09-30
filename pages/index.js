import MeetupList from "../components/meetups/MeetupList";
import { GetStaticProps } from "next";
import { MongoClient } from "mongodb";
import Head from "next/head";

// const DUMMY_LIST = [
//   {
//     id: "m1",
//     title: "A first meetup",
//     image:
//       "https://lp-cms-production.imgix.net/image_browser/Amsterdam%20canal%20tour%20boats.jpg",
//     address: "some address, 12345 Some City",
//     description: "this is a first meetup!",
//   },
//   {
//     id: "m2",
//     title: "A second meetup",
//     image:
//       "https://lp-cms-production.imgix.net/image_browser/Amsterdam%20canal%20tour%20boats.jpg",
//     address: "some address, 12345 Some City",
//     description: "this is a first meetup!",
//   },
//   {
//     id: "m3",
//     title: "A third meetup",
//     image:
//       "https://lp-cms-production.imgix.net/image_browser/Amsterdam%20canal%20tour%20boats.jpg",
//     address: "some address, 12345 Some City",
//     description: "this is a first meetup!",
//   },
//   {
//     id: "m4",
//     title: "A fourth meetup",
//     image:
//       "https://lp-cms-production.imgix.net/image_browser/Amsterdam%20canal%20tour%20boats.jpg",
//     address: "some address, 12345 Some City",
//     description: "this is a first meetup!",
//   },
// ];

function Homepage(props) {
  return (
    <>
      <Head>
        <title>Global Meetups for React loverz everywhere</title>
        <meta
          name="description"
          content="Browse a huge list of meetups you can attend, all over the world!"
        />
      </Head>
      ;
      {/* using Next's <Head> component to add head elements to our homepage - just need our page component to return it*/}
      <MeetupList meetups={props.meetups} />;
    </>
  );
}

export async function getStaticProps() {
  // fetch data from database

  const client = await MongoClient.connect(
    "mongodb+srv://sayhee:cHX2Z3egDUBh7EY8@cluster0.saffl6d.mongodb.net/ReactNextMeetups?retryWrites=true&w=majority" // ReactNextMeetups is the name of the db I am establishing a connection to. If it doesn't exist yet, this will create a db of that name in my cluster.
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  //  this is name of collection

  // finds all documents in collections
  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => {
        return {
          title: meetup.title,
          address: meetup.address,
          image: meetup.image,
          id: meetup._id.toString(), //need to do this .map to transform the value of the _id Mongodb attaches to each document when they are made, into a string (we will get an error otherwise)
        };
      }),
    },
  };
}

export default Homepage;
