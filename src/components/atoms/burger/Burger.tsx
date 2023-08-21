import { MouseEventHandler } from "react";
import { BurgerStyle } from "./BurgerStyle";

interface BurgerButtonProps {
  handleClick: MouseEventHandler<HTMLDivElement>;
  clicked: any;
}

function BurguerButton(props: BurgerButtonProps) {
  return (
    <BurgerStyle>
      <div
        onClick={props.handleClick}
        className={`icon nav-icon-5 ${props.clicked ? "open" : ""}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </BurgerStyle>
  );
}

export default BurguerButton;
