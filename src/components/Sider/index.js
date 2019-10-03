import React from "react";
import { Layout, Icon, Avatar, Menu, Tooltip } from "antd";
import { Link } from "react-router-dom";
import "./index.scss";
const { Sider } = Layout;

export default ({ ...props }) => {
  return (
    <Sider className="menu" width={180} collapsedWidth="0" breakpoint="lg">
      <div className="user-area">
        <div className="logo">
          <a class="link" target="_self" href="http://www.univali.br">
            <img
              border="0"
              src="//intranet.univali.br/imagens/univali.png"
              alt="logo"
            />
          </a>
        </div>
      </div>
      <div className="menu-options">
        <Tooltip title="Cadastro" placement="right">
          <div className="item">
            <Link to="/">
              <Icon type="form" />
              <span>Cadastro</span>
            </Link>
          </div>
        </Tooltip>
        <Tooltip title="Relatório" placement="right">
          <div className="item">
            <Link to="/relatorio">
              <Icon type="snippets" />
              <span>Relatório</span>
            </Link>
          </div>
        </Tooltip>
      </div>
    </Sider>
  );
};
