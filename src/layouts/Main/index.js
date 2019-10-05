import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import Components from "../../components";
import MainRoutes from "../../routes/CadastroRoutes";
import "./index.scss";

const { Content, Header } = Layout;
const { Sider } = Components;

export default ({ children, ...props }) => {
  return (
    <Layout className="main-template">
      <Header
        style={{
          height: "125px",
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"

          // background: "linear-gradient(180deg, #001529 , #337ab7)"
        }}
      >
        <div className="user-area">
          <div className="logo">
            <Link to="/">
              <img
                border="0"
                src="//intranet.univali.br/imagens/univali.png"
                alt="logo"
              />
            </Link>
          </div>
        </div>
      </Header>

      <Layout>
        <Sider />
        <Layout>
          <Content style={{ padding: "15px", background: "#E0E1E4" }}>
            <MainRoutes />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
