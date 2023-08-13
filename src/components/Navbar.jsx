import { Menu } from "antd";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["HomePage"]}>
      <Menu.Item key="homepage">
        <Link to="/">Home Page</Link>
      </Menu.Item>
      <Menu.Item key="session2">
        <Link to="/session2">Session2</Link>
      </Menu.Item>
      <Menu.Item key="session3">
        <Link to="/session3">Session3</Link>
      </Menu.Item>
      <Menu.Item key="session4">
        <Link to="/session4">Session4</Link>
      </Menu.Item>
      <Menu.Item key="session5">
        <Link to="/session5/uiFramework">Session5</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navigation;
