import { SocialStyle } from "./SocialStyle";
import { BsGithub, BsLinkedin } from "react-icons/bs";


const Social = () => {
  return (
    <SocialStyle>
      <a href="https://www.linkedin.com/in/galit-bixio/">
        <BsLinkedin />
      </a>

      <a href="https://github.com/gbixio">
        <BsGithub />
      </a>
    </SocialStyle>
  );
};

export default Social;
