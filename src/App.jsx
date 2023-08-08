import { Layout, theme } from "antd";
import Breadcrumb from "./components/BreadCrumb";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

import Router from "./routes";

const { Header, Content, Footer } = Layout;

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Navbar />
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb />
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <div className="site-layout-background" style={{ padding: 24 }}>
              <Router />
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          MinhHung ©2023 Rikkei Academy - Để nông dân biết code
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
