import React from "react";
import "./Apiproject.css";

const NewsCard = (props) => {
    console.log(props);
    return (
        <> <a href={props.articleData.url} target="_blank">
            <div className="box">
                <div className="container">
                    <div className="imageContainer">
                        <img src={props.articleData.urlToImage} alt="error"></img>
                    </div>
                    <div className="content">
                        <h4>Author: </h4>
                        <p>{props.articleData.author}</p>
                    </div>
                    <div className="content1">
                        <h4>Content:</h4>
                        <p>{props.articleData.content}</p>
                    </div>
                    <div className="content1">
                        <h4>Descrip:</h4>
                        <p>{props.articleData.description}</p>
                    </div>
                    <div className="content1">
                        <h4>Publish:</h4>
                        <p>{props.articleData.publishedAt}</p>
                    </div>
                    <div className="content1">
                        <h4>Source:</h4>
                        <p>id={props.articleData.source.id} and Name={props.articleData.source.name}</p>
                        
                    </div>
                    <div className="content1">
                        <h4>Title:</h4>
                        <p>{props.articleData.title}</p>
                    </div>

                </div>
            </div>
            </a>
        </>
    );
};

export default NewsCard;
