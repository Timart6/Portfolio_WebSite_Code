import {data} from "./Data";
import './HardSkills.css'

function HardSkills() {

    return(
            <div className={"Hard"}>
                {data.hardSkills.map((item,index)=>{
                    return (
                        <div key={index} className="SkillsList">
                            <p className="SkillsHead">
                                <img src={require(`${item.image}`)} alt={""}/>
                                {item.name}:
                            </p>
                            {item.list.map((skill, index)=>{
                                return <p key={index} className="Skill">{skill}</p>
                            })}
                        </div>
                    )
                })}
            </div>
    )
}

export default HardSkills;