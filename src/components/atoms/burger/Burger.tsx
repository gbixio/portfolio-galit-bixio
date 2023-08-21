import { MouseEventHandler } from "react";
import { BurgerStyle } from "./BurgerStyle";

function BurguerButton(props: { handleClick: MouseEventHandler<HTMLDivElement> | undefined; clicked: any; }) {
  return (
    <BurgerStyle>
      <div  onClick={props.handleClick} 
            className={`icon nav-icon-5 ${props.clicked ? 'open' : ''}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </BurgerStyle>
  )
}

export default BurguerButton

