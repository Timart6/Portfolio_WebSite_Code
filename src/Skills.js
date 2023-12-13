import './Skills.css'
import SoftSkills from "./SoftSkills";
import {useState} from "react";
import HardSkills from "./HardSkills";

function Skills() {

    const [skillsPanelState, setSkillsPanelState] = useState("soft");
    const [softButtonState, setSoftButtonState] = useState("selected");
    const [hardButtonState, setHardButtonState] = useState("unselected");

    function SelectSoft() {
        setSkillsPanelState("soft");
        setSoftButtonState("selected")
        setHardButtonState("unselected")
    }

    function SelectHard() {
        setSkillsPanelState("hard");
        setSoftButtonState("unselected")
        setHardButtonState("selected")
    }

    return(
        <>
            <h1>Skills</h1>
            <div className="Skills">
                <div>
                    <span className={`SkillsTypeButton soft ${softButtonState}`} onClick={SelectSoft}>Soft</span>
                    <span className={`SkillsTypeButton hard ${hardButtonState}`} onClick={SelectHard}>Hard</span>
                </div>
                <div className = {`SkillsPanel ${skillsPanelState}`}>
                    <SoftSkills/>
                    <HardSkills/>
                </div>
            </div>
        </>
    )
}

export default Skills