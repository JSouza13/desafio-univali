import React from "react";
import { Layout, Icon, Avatar, Menu, Tooltip } from "antd";
import { Link } from "react-router-dom";
import "./index.scss";
const { Sider } = Layout;

export default ({ ...props }) => {
  return (
    <Sider className="menu" width={280} collapsedWidth="0" breakpoint="lg">
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
      <div className="menu-options">
        <Link to="/cadastro">
          <Tooltip title="Cadastro" placement="right">
            <div className="item">
              <Icon type="form" />
              <span>Cadastro</span>
            </div>
          </Tooltip>
        </Link>
        <Link to="/relatorio">
          <Tooltip title="Relatório" placement="right">
            <div className="item">
              <Icon type="snippets" />
              <span>Relatório</span>
            </div>
          </Tooltip>
        </Link>
      </div>
    </Sider>
  );
};
