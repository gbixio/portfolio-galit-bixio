import { TitleStyle } from "./TitleStyle";

interface Props {
  title1: string;
  highligth: string;
  hlcolor: string;
  title2: string;
}
const Title: React.FC<Props> = ({ title1, title2, highligth, hlcolor }) => {
  return (
    <TitleStyle hlcolor={hlcolor}>
      {title1}
      <span>{highligth}</span>
      <br /> {title2}
    </TitleStyle>
  );
};
export default Title;
