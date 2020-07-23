import React from "react";
import ArticleCard from "./ArticleCard";
import "../style/articles.css";
import { Spinner } from "react-bootstrap";
// Firebase
import {
  FirestoreProvider,
  FirestoreCollection,
} from "@react-firebase/firestore";
import { withFirebase } from "../Firebase";

const Articles = ({ firebase }) => {
  return (
    <FirestoreProvider firebase={firebase.fb}>
      <div className="articles-clean mt-5 page">
        <div className="container">
          <div className="row articles">
            <FirestoreCollection path="articles/">
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
                      <ArticleCard
                        file={elem.image}
                        key={index}
                        id={index}
                        title={elem.title}
                        author={elem.author}
                        content={elem.content}
                        date={elem.date}
                      ></ArticleCard>
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

export default withFirebase(Articles);
