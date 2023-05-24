import { AiFillMail } from "react-icons/all";
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

      <a href="mailto:galbixio93@gmail.com">
        <AiFillMail />
      </a>
    </SocialStyle>
  );
};

export default Social;
