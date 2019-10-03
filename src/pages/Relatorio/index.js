import React from "react";
import { Table, Divider, Icon, Card, Button } from "antd";
import { Link } from "react-router-dom";

import "./index.scss";

const columns = [
  {
    title: "Descrição",
    dataIndex: "descricao",
    key: "descricao"
  },
  {
    title: "Unidade",
    dataIndex: "unidade",
    key: "unidade"
  },
  {
    title: "Quantidade",
    dataIndex: "quantidade",
    key: "quantidade"
  },
  {
    title: "Ações",
    key: "acao",
    render: (text, record) => (
      <span>
        <Icon type="edit" theme="filled" />
        <Divider type="vertical" />
        <Icon type="delete" theme="filled" />
      </span>
    )
  }
];

const data = [
  {
    key: "1",
    descricao: "Batata",
    unidade: "Quilograma",
    quantidade: "10"
  }
];

export default function CadastroItem() {
  return (
    <>
      <Card
        title="Itens cadastrados"
        style={{ width: "100%", borderRadius: "24px", padding: "50px" }}
      >
        <Table columns={columns} dataSource={data} />
        <Link to="/">
          <Button type="primary" htmlType="submit">
            Adicionar novo item
          </Button>
        </Link>
      </Card>
    </>
  );
}
