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
          height: "90px",
          position: "fixed",
          zIndex: 1,
          width: "100%",
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
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
          <Content
            style={{
              padding: "50px",
              marginTop: "90px",
              background: "#D4E6F1",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <MainRoutes />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
