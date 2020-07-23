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
            <FirestoreCollection
              path="articles/"
              orderBy={[{ field: "date", type: "desc" }]}
            >
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
                    <ArticleCard
                      documentId={res.ids[index]}
                      key={index}
                      id={index}
                      file={elem.image}
                      title={elem.title}
                      author={elem.author}
                      content={elem.content}
                      date={elem.date}
                      edited={elem.edited}
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

// Falta pagination

export default withFirebase(Articles);
