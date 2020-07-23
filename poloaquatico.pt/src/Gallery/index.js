import React from "react";
import Header from "./Header";
import GalleryCard from "./GalleryCard";
import Spinner from "react-bootstrap/Spinner";
import "../style/gallery.css";
// Firebase
import {
  FirestoreProvider,
  FirestoreCollection,
} from "@react-firebase/firestore";
import { withFirebase } from "../Firebase";

const Gallery = (props) => {
  return (
    <FirestoreProvider firebase={props.firebase.fb}>
      <div className="page">
        <Header></Header>
        <section id="portfolio" className="portfolio galeria">
          <div className="container">
            <div className="row">
              <FirestoreCollection path="gallery/" orderByKey>
                {(res) => {
                  return res.isLoading ? (
                    <Spinner
                      animation="border"
                      role="status"
                      className="news-spinner"
                    >
                      <span className="sr-only">Loading...</span>
                    </Spinner>
                  ) : (
                    res.value.map((elem, index) => (
                      <GalleryCard
                        file={elem.image}
                        key={index}
                        id={index}
                        author={elem.author}
                        description={elem.description}
                        date={elem.date}
                      ></GalleryCard>
                    ))
                  );
                }}
              </FirestoreCollection>
            </div>
          </div>
        </section>
      </div>
    </FirestoreProvider>
  );
};

export default withFirebase(Gallery);
