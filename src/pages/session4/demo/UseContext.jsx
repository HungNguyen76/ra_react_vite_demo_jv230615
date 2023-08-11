import { useContext } from "react";

import Paragraph from "../../components/Paragraph";
import { ThemeContext } from "./context/ThemeProvider";

//Context
//CompA => CompB => CompC
//Theme: Dark / Light

//1. Create Context
//2. Provider
//3. Consumer : Paragraph Comp

// export const ThemeContext = createContext();

export default function UseContext() {
  const context = useContext(ThemeContext);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={context.toggleTheme}>Toggle Theme</button>
      <Paragraph />
    </div>
  );
}
