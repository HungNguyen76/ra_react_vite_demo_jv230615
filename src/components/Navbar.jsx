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
    </Menu>
  );
};

export default Navigation;
