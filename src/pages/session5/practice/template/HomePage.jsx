import Navbar from "./components/Navbar";
import Body from "./components/Body";
import "./HomePage.scss";

export default function HomePage() {
  return (
    <div className="container">
      <Navbar></Navbar>
      <Body></Body>
    </div>
  );
}
