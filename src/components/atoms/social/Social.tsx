import {  AiFillMail, FaGithubAlt, FaLinkedinIn } from "react-icons/all";
import { SocialStyle } from "./SocialStyle";
import { BsBehance } from "react-icons/bs";

const Social = () => {
  return (
    <SocialStyle>
      <a href="https://www.linkedin.com/in/galit-bixio/">
        <FaLinkedinIn />
      </a>

      <a href="https://github.com/gbixio">
        <FaGithubAlt />
      </a>

      <a href="mailto:galbixio93@gmail.com">
        <AiFillMail />
      </a>

      <a href="https://www.behance.net/galbixio1">
        <BsBehance />
      </a>
    </SocialStyle>
  );
};

export default Social;
