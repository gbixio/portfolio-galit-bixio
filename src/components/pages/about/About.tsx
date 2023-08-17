import { IoLogoJavascript } from "react-icons/io5";
import SkillIcon from "../../atoms/skillIcon/SkilIcon";
import Title from "../../atoms/title/Title";
import { AboutStyle, LeftContainer, RightContainer } from "./AboutStyle";
import {
  SiCss3,
  ImHtmlFive,
  SiTypescript,
  DiReact,
  FaNode,
  SiNestjs,
  SiMongodb,
  FiFigma,
  SiPostman,
  SiStyledcomponents,
  SiMysql,
  TfiGithub,
  SiJest,
  FaPython,
} from "react-icons/all";

function About() {
  return (
    <AboutStyle>
      <LeftContainer>
        <Title title1={"Sobre mi"} highligth={""} hlcolor={""} title2={""} />
        <p>
          Soy una full-stack developer proactiva y apasionada por la tecnología.
          Recientemente, he completado un intenso bootcamp de 850 horas en el
          que he desarrollado habilidades técnicas en tecnologías front-end y
          back-end como TypesScript, HTML, CSS, Node.js y MongoDB, entre otras.
          Además, he trabajado con metodologías ágiles y scrum que han mejorado
          significativamente el desarrollo en los proyectos en los que he
          participado en los que he asumido roles como Scrum Master, Product
          Owner y Developer.
          <br />
          Estoy en búsqueda de una oportunidad emocionante y desafiante para
          seguir creciendo como desarrolladora y aportar mis habilidades y
          conocimientos en un ambiente dinámico.
        </p>
      </LeftContainer>
      <RightContainer>
        <SkillIcon skill={"HTML"} icon={<ImHtmlFive />}></SkillIcon>
        <SkillIcon skill={"CSS"} icon={<SiCss3 />}></SkillIcon>
        <SkillIcon skill={"TypeScript"} icon={<SiTypescript />}></SkillIcon>
        <SkillIcon skill={"JavaScript"} icon={<IoLogoJavascript />}></SkillIcon>
        <SkillIcon skill={"React"} icon={<DiReact />}></SkillIcon>
        <SkillIcon skill={"Node"} icon={<FaNode />}></SkillIcon>
        <SkillIcon skill={"Nestjs"} icon={<SiNestjs />}></SkillIcon>
        <SkillIcon skill={"MongoDB"} icon={<SiMongodb />}></SkillIcon>
        <SkillIcon skill={"Figma"} icon={<FiFigma />}></SkillIcon>
        <SkillIcon skill={"Postman"} icon={<SiPostman />}></SkillIcon>
        <SkillIcon
          skill={"Styled Components"}
          icon={<SiStyledcomponents />}
        ></SkillIcon>
        <SkillIcon skill={"Mysql"} icon={<SiMysql />}></SkillIcon>
        <SkillIcon skill={"GitHub"} icon={<TfiGithub />}></SkillIcon>
        <SkillIcon skill={"Jest"} icon={<SiJest />}></SkillIcon>
        <SkillIcon skill={"Python"} icon={<FaPython />}></SkillIcon>
      </RightContainer>
    </AboutStyle>
  );
}

export default About;
