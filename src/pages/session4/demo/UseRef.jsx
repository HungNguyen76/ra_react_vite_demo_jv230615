// Lưu các giá trị qua 1 tham chiếu bên ngoài
// function component
import { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [count, setCount] = useState(60);

  const timerId = useRef();
  const h1Ref = useRef();
  const prevCount = useRef(); //mặc định thì undefined nếu ko truyền tham số gì vào

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  useEffect(() => {
    const rect = h1Ref.current.getBoundingClientRect();
    //console.log(rect) //useRef luôn trả về object có property current
  });

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timerId.current);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>useRef</h1>
      <h1 ref={h1Ref}>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};
export default UseRef;
