import { ThemeContext } from "../session4/hooks/context/ThemeProvider";
import { useContext } from "react";

const Paragraph = () => {
  const context = useContext(ThemeContext);
  return (
    <p className={context.theme}>
      Context provides a way to pass data through the component tree without
      having to pass props down manually at every level.
    </p>
  );
};
export default Paragraph;
