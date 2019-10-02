import React from "react";
import { Layout } from "antd";
import "./index.scss";

const { Footer } = Layout;

export default () => {
  return (
    <Footer className="footer">
      <span>© Copyright 2019. Todos os direitos reservados.</span>
    </Footer>
  );
};
