import { useSelector } from "react-redux";

function SkillSet() {
let ss  = useSelector(gs=>gs.skillSet)
    return(
        <div>
            <h3>SkillSet Information : </h3>
            <ul>
                {ss.map((skill,index)=><li key={index}>{skill}</li>)}
            </ul>
        </div>
    )
}

export default SkillSet;