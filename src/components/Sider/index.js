import React from "react";
import { Layout, Menu, Icon, Tooltip } from "antd";
import "./index.scss";
const { Sider } = Layout;

export default ({ ...props }) => {
  return (
    <Sider className="menu" width={80} collapsedWidth="0" breakpoint="lg">
      <div className="menu-options">
        <Tooltip title="Cadastro" placement="right">
          <div className="item">
            <Icon type="form" />
            <span>Cadastro</span>
          </div>
        </Tooltip>
        <Tooltip title="Relatório" placement="right">
          <div className="item">
            <Icon type="snippets" />
            <span>Relatório</span>
          </div>
        </Tooltip>
      </div>
    </Sider>
  );
};
