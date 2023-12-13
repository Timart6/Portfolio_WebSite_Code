import "./Header.css"
import {useState} from "react";

function Header({ScrollTo, aboutRef, skillsRef, expRef, contactsRef}) {

    const [hamburgerState, setHamburgerState] = useState("closed")

    let selectedButton;

    const HamburgerClick = () => {
        const changeState = (currentState) => {
            if (currentState === "closed") setHamburgerState("opened")
            else setHamburgerState("closed")
        }
        changeState(hamburgerState)
    }

    const HeaderButtonClick = (button, ref) => {
        ScrollTo(ref);
        if(hamburgerState === "opened") {
            setHamburgerState("closed")
        }
        else {
            if (selectedButton !== undefined) selectedButton.className = "unselected";
            button.className = "selected";
            selectedButton = button;
        }
    }

    return (
        <>
            <header className="Header" >
                <div className="HeaderText">
                    <h4>Timofii Averianov</h4>
                    <h5>Junior Software Engineer</h5>
                </div>
                <div className="HeaderButtons">
                    <button className="unselected" onClick={(e) => HeaderButtonClick(e.target, aboutRef)}>About me</button>
                    <button className="unselected" onClick={(e) => HeaderButtonClick(e.target, skillsRef)}>Skills</button>
                    <button className="unselected" onClick={(e) => HeaderButtonClick(e.target, expRef)}>Experience</button>
                    <button className="unselected" onClick={(e) => HeaderButtonClick(e.target, contactsRef)}>Contacts</button>
                </div>
                <div className={`Hamburger ${hamburgerState}`} onClick={HamburgerClick}>
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                </div>
            </header>

            <div className="ButtonsMenuContainer">
                <div className={`ButtonsMenu ${hamburgerState}`}>
                    <button onClick={(e) => HeaderButtonClick(e.target, aboutRef)}>About me</button>
                    <button onClick={(e) => HeaderButtonClick(e.target, skillsRef)}>Skills</button>
                    <button onClick={(e) => HeaderButtonClick(e.target, skillsRef)}>Experience</button>
                    <button onClick={(e) => HeaderButtonClick(e.target, skillsRef)}>Contacts</button>
                </div>
            </div>
        </>
    )
}

export default Header;