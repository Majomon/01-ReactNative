import { useState } from "react";
interface Options {
  initialValue?: number;
}
export const useCounter = ({ initialValue = 0 }: Options) => {
  const [count, setCount] = useState(initialValue);

  const increaseBy = (value: number) => {
    setCount(count + value);
  };

  const decreaseBy = (value: number) => {
    const newValue = count - value;
    if (newValue >= 0) {
      setCount(count - value);
    }
  };

  return {
    //Properties
    count,
    //Methods
    increaseBy,
    decreaseBy,
  };
};
