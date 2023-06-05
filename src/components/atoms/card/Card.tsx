import { CardContainer, FrontContent, Content, Heading, Cards } from "./CardStyle";

interface Props {
  title: string;
  rol: string;
  resume: string;
  height: string;
  width: string;
}
const Card: React.FC<Props> = ({  title, rol, resume, height, width}) => {
  return (
    <>
 <CardContainer height={height} width={width} >
      <Cards>
        <FrontContent className="front-content">
          <p>{title}</p>
        </FrontContent>
        <Content className="content">
          <Heading>{rol}</Heading>
          <p>
          {resume}
          </p>
        </Content>
      </Cards>
    </CardContainer>
  </>
  );
}

export default Card;
