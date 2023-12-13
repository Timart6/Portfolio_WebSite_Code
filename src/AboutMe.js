import "./AboutMe.css"
import {data} from "./Data";

function AboutMe() {
    return (
        <>
            <h1>About me</h1>
            <div className="AboutMe">
                <div style={{display:'flex', flexDirection:'column'}}>
                    <p> {data.aboutMe[0]} </p>
                    <p> {data.aboutMe[1]} </p>
                </div>
                <img src={require('./photo.png')} alt={""} className="Photo"/>
            </div>
        </>
    )
}

export default AboutMe;