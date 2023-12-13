import "./WorkPlace.css"
import {useState} from "react";

function WorkPlace({workExp}) {

    const [feedbackState, SetFeedbackState] = useState("hidden")

    function FeedbackCLick() {
        if(feedbackState === "hidden") SetFeedbackState("opened")
        else SetFeedbackState("hidden")
    }

    return (
        <div className="WorkPlace">
            <div className="Company">
                <img src={require(`${workExp.logo}`)} alt = " "/>
                <h1>{workExp.company}</h1>
            </div>

            <h3>{workExp.experience}</h3>

            <p className="AboutWork">{workExp.about}</p>

            <button className="FeedbackButton" onClick={FeedbackCLick}>Feedback</button>
            <div className={`Feedback ${feedbackState}`}>
                {workExp.feedback.map((comment, index) => {
                    return (
                        <div className="Comment" key={index}>
                            <div className="CommentHeader">
                                <img src={require(`${comment.photo}`)} alt={" "}/>
                                <h4> {comment.name} </h4>
                            </div>
                            <p> {comment.text} </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default WorkPlace;