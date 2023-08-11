// import React from "react";
// import { Menu } from "antd";

// const { Item } = Menu;
export default function Hooks() {
  return (
    <div style={{ fontSize: 20 }}>
      <h1>Hooks</h1>
      <ol>
        <li>Tìm hiểu về React Hook </li>
        <li>
          {" "}
          useState
          <ul>
            <li style={{ fontSize: 17 }}>khai bao local state</li>
          </ul>
        </li>
        <li>
          useEffect
          <ul>
            <li style={{ fontSize: 17 }}>update DOM</li>
            <li style={{ fontSize: 17 }}>listen DOM events</li>
            <li style={{ fontSize: 17 }}>clean up</li>
          </ul>
        </li>
        <li>useReducer</li>
        <li>useContext</li>
        <li>useRef</li>
        <li>useMemo</li>
        <li>useCallback</li>
      </ol>
    </div>
  );
}
