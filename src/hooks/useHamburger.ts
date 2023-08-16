import { useState } from 'react';

const useHamburger = (initialState: boolean = false): [boolean, () => void] => {
  const [state, setState] = useState<boolean>(initialState);

  const hamburger = () => {
    setState((prevState) => !prevState);
  };

  return [state, hamburger];
};

export default useHamburger;