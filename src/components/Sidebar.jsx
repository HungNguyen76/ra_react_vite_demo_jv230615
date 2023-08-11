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
        key: "StateProp",
        icon: <CodeSandboxOutlined />,
        label: "Session2-State&Props",
        link: "/session2/stateProps",
      },
      {
        key: "LifeCycle",
        icon: <CodeSandboxOutlined />,
        label: "Session3-LifeCycle&Form",
        link: "/session3/lifeCycle",
      },
      {
        key: "Hooks",
        icon: <CodeSandboxOutlined />,
        label: "Session4-Hooks",
        link: "/session4/hooks",
      }
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
            key: "RollDice",
            icon: <ThunderboltOutlined />,
            label: "RollDice",
            link: "/session2/practice/rollDice",
          },
          {
            key: "SearchForm",
            icon: <ThunderboltOutlined />,
            label: "SearchForm",
            link: "/session2/practice/searchForms",
          },
        ],
      },
      {
        key: "session3",
        icon: <RocketOutlined />,
        label: "Session3",
        link: "/session3/loginForm",
      },
      {
        key: "session4",
        icon: <RocketOutlined />,
        label: "Session4",
        link: "/session4",
        submenu: [
          {
            key: "useState",
            icon: <ThunderboltOutlined />,
            label: "UseState",
            link: "/session4/hooks/useState",
          },
          {
            key: "useEffect",
            icon: <ThunderboltOutlined />,
            label: "UseEffect",
            link: "/session4/hooks/useEffect",
          },
          {
            key: "useReducer",
            icon: <ThunderboltOutlined />,
            label: "UseReducer",
            link: "/session4/hooks/useReducer",
          },
          {
            key: "useMemo",
            icon: <ThunderboltOutlined />,
            label: "UseMemo",
            link: "/session4/hooks/useMemo",
          },
          {
            key: "useCallback",
            icon: <ThunderboltOutlined />,
            label: "UseCallback",
            link: "/session4/hooks/useCallback",
          },
          {
            key: "useContext",
            icon: <ThunderboltOutlined />,
            label: "UseContext",
            link: "/session4/hooks/useContext",
          },
          {
            key: "useRef",
            icon: <ThunderboltOutlined />,
            label: "UseRef",
            link: "/session4/hooks/useRef",
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
