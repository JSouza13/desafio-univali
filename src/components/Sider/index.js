import React from "react";
import { Layout, Icon, Tooltip } from "antd";
import { Link } from "react-router-dom";
import "./index.scss";
const { Sider } = Layout;

export default ({ ...props }) => {
  return (
    <Sider
      className="menu"
      width={180}
      collapsedWidth="0"
      breakpoint="lg"
      style={{ background: "#fff" }}
    >
      <div className="menu-options">
        <Link to="/cadastro">
          <Tooltip title="Cadastro" placement="right">
            <div className="item" style={{ color: "black" }}>
              <Icon type="form" style={{ color: "black" }} />
              <span>Cadastro</span>
            </div>
          </Tooltip>
        </Link>
        <Link to="/relatorio">
          <Tooltip title="Relatório" placement="right">
            <div className="item" style={{ color: "black" }}>
              <Icon type="snippets" style={{ color: "black" }} />
              <span>Relatório</span>
            </div>
          </Tooltip>
        </Link>
      </div>
    </Sider>
  );
};
