import React, { useEffect, useState } from "react";
import "./Apiproject.css";
import NavigationBar from "./NavigationBar";
import NewsCard from "./NewsCard";
import { BrowserRouter } from "react-router-dom";

export const Apiproject = () => {
    let [newsArticle, setNewsArticle] = useState([]);
    let [apiTag, setApiTag] = useState("");

    
    useEffect(() => {
        let origin = window.location.pathname;
         console.log(origin);
         if(origin==="/"){
            fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b9c4c6a3fe9542fc92f55a0c6fecf547")
            .then((response) => response.json())
            .then((data) => {
                setNewsArticle(data.articles);
                setApiTag("top-headlines")
            });

         }
         else{
        fetch(
            `https://newsapi.org/v2/top-headlines?category=${origin.split('/')[1]}&apiKey=b9c4c6a3fe9542fc92f55a0c6fecf547`
        )
            .then((response) => response.json())
            .then((data) => {
                setNewsArticle(data.articles);
                setApiTag(origin.split("/")[1]);
            });
        }
        
    },[]);
    let SportsClicked = (id) => {
        if (id !== "top-headlines") {
            fetch(`https://newsapi.org/v2/top-headlines?category=${id}&apiKey=b9c4c6a3fe9542fc92f55a0c6fecf547`)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data.articles);
                    setNewsArticle(data.articles);
                    setApiTag(id);
                });
        } else {
            fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b9c4c6a3fe9542fc92f55a0c6fecf547")
                .then((response) => response.json())
                .then((data) => {
                    setNewsArticle(data.articles);
                    let variable = id.split("-").join(" ");
                    setApiTag(variable);
                });
        }
    };
    return (
        <div className="">
            <div className="navi">
                <BrowserRouter>
                    <NavigationBar SportsClicked={SportsClicked} />
                </BrowserRouter>
            </div>

            <h1>{apiTag}</h1>
            <div className="bigBox">
                {newsArticle.map((ele, index) => {
                    return <NewsCard articleData={ele} />;
                })}
            </div>
        </div>
    );
};
