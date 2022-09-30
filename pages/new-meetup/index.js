// // our domain.com/new-meetup

// import NewMeetupForm from "../../components/meetups/NewMeetupForm";

// function NewMeetupPage() {
//   async function addMeetupHandler(enteredMeetupData) {
//     // console.log(enteredMeetupData);

//     const response = await fetch("/api/new-meetup", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(enteredMeetupData),
//     });

//     const data = await response.json();
//     console.log(data);
//   }

//   return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
// }

// export default NewMeetupPage;

// our-domain.com/new-meetup

import { useRouter } from "next/router";
import Head from "next/head"; // will use to to add meta tags for SEO before deployment
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name="description"
          content="Add a new meetup to network with other people everywhere!"
        />
      </Head>
      {/* Adding head data to our new-meetup page. */}
      <NewMeetupForm onAddMeetup={addMeetupHandler} />;
    </>
  );
}

export default NewMeetupPage;
