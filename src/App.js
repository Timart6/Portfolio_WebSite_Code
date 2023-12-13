import './App.css';
import './Skills'
import Experience from "./Experience";
import Skills from "./Skills";
import {useRef} from "react";
import Contacts from "./Contacts";
import Header from "./Header";
import AboutMe from "./AboutMe";

function App() {

    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const expRef = useRef(null);
    const contactsRef = useRef(null);

    const ScrollTo = (targetRef) => {
        targetRef.current?.scrollIntoView({behavior: 'smooth'})

        if (targetRef !== contactsRef) {
            const element = document.querySelector('.Header')
            const offset = parseInt(window.getComputedStyle(element).getPropertyValue("height"));
            window.scrollBy(0, -offset);
        }
    }

    return (
    <div className="App">
     <Header ScrollTo={ScrollTo} aboutRef={aboutRef} skillsRef={skillsRef} expRef={expRef} contactsRef={contactsRef}/>
        <div className="Content">
            <div ref={aboutRef}> <AboutMe/> </div>
            <div ref={skillsRef}> <Skills/> </div>
            <div ref={expRef}> <Experience/> </div>
        </div>
        <div ref={contactsRef}> <Contacts/> </div>
    </div>
  );
}

export default App;