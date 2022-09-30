import React from "react";

import { useRouter } from "next/router";
import styles from "./MeetupDetail.module.css";

function MeetupDetail(props) {
  const router = useRouter();
  //   console.log(router.query);

  //   matchingId = router.query.meetupId;

  return (
    <section className={styles.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}

export default MeetupDetail;
