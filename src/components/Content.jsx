import { memo } from "react";
import Paragraph from "./Paragraph";

function Content({ onIncrease }) {
  return (
    <>
      {/* <Paragraph /> */}
      <h2>HELLO 500 ANH EM RA</h2>
      <button onClick={onIncrease}>Click me!</button>
    </>
  );
}
export default memo(Content); //chỉ render khi nào props truyền vào Content thay đổi
