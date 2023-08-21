import { useState } from "react";

function useClickedState(initialState = false) {
  const [clicked, setClicked] = useState(initialState);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return [clicked, handleClick];
}

export default useClickedState;
