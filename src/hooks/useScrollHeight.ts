import { useEffect, useState } from "react";

const useScrollHeight = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollHeight(window.scrollY);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollHeight;
};

export default useScrollHeight;
