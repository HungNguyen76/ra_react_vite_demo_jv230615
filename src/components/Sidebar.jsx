import { useState } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import {
  HomeFilled,
  CodeFilled,
  EditFilled,
  CodeSandboxOutlined,
  ThunderboltOutlined,
  RocketOutlined,
  FireOutlined,
} from "@ant-design/icons";

const menuItems = [
  {
    key: "Homepage",
    icon: <HomeFilled />,
    label: "Rikkei Academy",
    link: "/",
  },
  {
    key: "Demo",
    icon: <FireOutlined />,
    label: "Demo",
    link: "/demo",
    submenu: [
      {
        key: "LifeCycle",
        icon: <CodeSandboxOutlined />,
        label: "Session2-State&Props",
        link: "/session2/stateProps",
      },
    ],
  },
  {
    key: "Practice",
    icon: <CodeFilled />,
    label: "Practice",
    link: "/practice",
    submenu: [
      {
        key: "session2",
        icon: <RocketOutlined />,
        label: "Session2",
        link: "/session2",
        submenu: [
          {
            key: "Flipcoin",
            icon: <ThunderboltOutlined />,
            label: "Flipcoin",
            link: "/session2/practice/flipCoin",
          },
          {
            key: "SearchForm",
            icon: <ThunderboltOutlined />,
            label: "SearchForm",
            link: "/session2/practice/searchForms",
          },
        ],
      },
    ],
  },
  {
    key: " Note",
    icon: <EditFilled />,
    label: "Note",
    link: "/note",
  },
];
const renderMenuItems = (items) =>
  items.map((item) => {
    if (item.submenu) {
      return (
        <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
          {renderMenuItems(item.submenu)}
        </Menu.SubMenu>
      );
    }
    return (
      <Menu.Item key={item.key} icon={item.icon}>
        <Link to={item.link}>{item.label}</Link>
      </Menu.Item>
    );
  });
const { Sider } = Layout;
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={270}
      className="site-layout-background"
    >
      <div className="demo-logo-vertical" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["students"]}>
        {renderMenuItems(menuItems)}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
