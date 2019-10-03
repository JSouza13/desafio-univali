import React, { useState } from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import Components from "../../components";
import MainRoutes from "../../routes/CadastroRoutes";
import "./index.scss";

const { Content } = Layout;
const { Sider, Footer, Header } = Components;

export default ({ children, ...props }) => {
  return (
    <Layout className="main-template">
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0
        }}
      />
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }} />
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <MainRoutes />
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};
