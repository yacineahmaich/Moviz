import { useEffect } from "react";

const useScrollup = () => {
  // scroll to the top of the page
  useEffect(() => {
    window.scrollTo({ left: 0, top: 0 });
  }, []);
};

export default useScrollup;
