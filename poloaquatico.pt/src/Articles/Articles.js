import React from "react";
import ArticleCard from "./ArticleCard";
import cake from "../assets/img/portfolio/cake.png";
import "../style/articles.css";
import { Spinner } from "react-bootstrap";
// Firebase
import firebase from "firebase/app";
import "firebase/firestore";
import {
  FirestoreProvider,
  FirestoreCollection,
} from "@react-firebase/firestore";
import { config } from "../config/firebaseConfig";

const Articles = () => {
  return (
    <FirestoreProvider {...config} firebase={firebase}>
      <div className="articles-clean mt-5 page">
        <div className="container">
          <div className="row articles">
            <FirestoreCollection path="articles/" orderByKey>
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
            {/* <ArticleCard file={cake} alt="cake"></ArticleCard>
            <ArticleCard file={cake} alt="cake"></ArticleCard>
            <ArticleCard file={cake} alt="cake"></ArticleCard>
            <ArticleCard file={cake} alt="cake"></ArticleCard> */}
          </div>
        </div>
      </div>
    </FirestoreProvider>
  );
};

export default Articles;
