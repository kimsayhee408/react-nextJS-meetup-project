import { GetStaticProps } from "next";
import { GetStaticPaths } from "next";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { useRouter } from "next/router";
import { MongoClient, ObjectId } from "mongodb"; //MongoDB adds a ID to each document but it is not a string, it's this weird object thing.
import Head from "next/head";

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://sayhee:cHX2Z3egDUBh7EY8@cluster0.saffl6d.mongodb.net/ReactNextMeetups?retryWrites=true&w=majority" // ReactNextMeetups is the name of the db I am establishing a connection to. If it doesn't exist yet, this will create a db of that name in my cluster.
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  //  this is name of collection

  // finds all documents from collection but just the _id field for each document
  const meetupsIDs = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: "blocking", // video 349
    paths: meetupsIDs.map((id) => ({
      params: { meetupId: id._id.toString() },
    })), // dynamically generating supported paths
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://sayhee:cHX2Z3egDUBh7EY8@cluster0.saffl6d.mongodb.net/ReactNextMeetups?retryWrites=true&w=majority" // ReactNextMeetups is the name of the db I am establishing a connection to. If it doesn't exist yet, this will create a db of that name in my cluster.
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  //  this is name of collection

  // finds documents with _id value equal to the meetupId which we have from the context.params above
  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId), // because MongoDb ids are these weird object things
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(), // again, need to transform the ID object into a string before we can pass it as part of this props, which our page component will receive
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

function MeetupDetails(props) {
  // the page automatically receives the nested props object returned by the getStaticProps function in the same file
  return (
    <>
      {/* Adding DYNAMIC head data to our details pages. */}
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>

      <MeetupDetail
        image={props.meetupData.image}
        description={props.meetupData.description}
        title={props.meetupData.title}
        address={props.meetupData.address}
      />
    </>
  );
}

export default MeetupDetails;

//vs. hardcoded
// [
//   {
//     params: {
//       meetupId: "m1",
//     },
//   },
//   {
//     params: {
//       meetupId: "m2",
//     },
//   },
//   {
//     params: {
//       meetupId: "m3",
//     },
//   },
// ],
