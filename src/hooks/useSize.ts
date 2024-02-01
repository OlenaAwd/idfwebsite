import { useEffect, useState } from "react";

const getSize = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
});

const useSize = () => {
  const [size, setSize] = useState(getSize());

  useEffect(() => {
    const event = () => {
      setSize(getSize());
    };

    window.addEventListener("resize", event);

    return () => {
      window.removeEventListener("resize", event);
    };
  }, []);

  return size;
};

export default useSize;