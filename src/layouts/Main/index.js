import React, { useState } from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import Components from "../../components";
import "./index.scss";

const { Content } = Layout;
const { Sider, Footer, Header } = Components;

export default ({ children, ...props }) => {
  return (
    <Layout className="main-template">
      <Sider />
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }} />
        <Content
          style={{
            margin: "24px",
            minHeight: 280
          }}
        />
        <Footer />
      </Layout>
    </Layout>
  );
};
