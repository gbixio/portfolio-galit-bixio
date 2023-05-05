import { SkilIconStyle } from "./SkillIconStyle"

interface Props {
    skill: string
    icon: React.ReactNode;

}
const SkillIcon: React.FC<Props> = ({ skill, icon}) => {
  return (
    <SkilIconStyle>
        {icon}
        <p> {skill}</p>
    </SkilIconStyle>
  )
}

export default SkillIcon