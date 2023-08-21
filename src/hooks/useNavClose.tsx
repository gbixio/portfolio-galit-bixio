import setClicked from "./useClickedState";

function useNavClose() {
  const closeNav = () => {
    setClicked(false);
  };

  return closeNav;
}

export default useNavClose;