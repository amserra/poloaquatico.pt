import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "../style/news.css";
import NewsCard from "./NewsCard";
// Firebase
import {
  FirestoreProvider,
  FirestoreCollection,
} from "@react-firebase/firestore";
import { withFirebase } from "../Firebase";
// import NewsLoadingCard from "./NewsLoadingCard";

const News = ({ firebase }) => {
  return (
    <FirestoreProvider firebase={firebase.fb}>
      <div className="news-horizontal mt-5 page">
        <div className="container">
          <div className="row news">
            <FirestoreCollection path="news/" orderByKey>
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
                  res.value
                    .sort((a, b) => {
                      if (a.date.toMillis() > b.date.toMillis()) return -1;
                      if (a.date.toMillis() < b.date.toMillis()) return 1;
                      return 0;
                    })
                    .map((elem, index) => (
                      <NewsCard
                        file={elem.image}
                        key={index}
                        id={index}
                        title={elem.title}
                        author={elem.author}
                        content={elem.content}
                        date={elem.date}
                      ></NewsCard>
                    ))
                );
              }}
            </FirestoreCollection>
          </div>
        </div>
      </div>
    </FirestoreProvider>
  );
};

// Falta pagination

export default withFirebase(News);
