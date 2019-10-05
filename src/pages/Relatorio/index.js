import React, { useState } from "react";
import { Table, Card, Button } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./index.scss";

function handleExcluir() {
  window.localStorage.removeItem("");

  window.location.reload();
}

const columns = [
  {
    title: "Descrição",
    dataIndex: "descricao",
    key: "descricao"
  },
  {
    title: "Unidade",
    dataIndex: "unMedida",
    key: "unMedida"
  },
  {
    title: "Quantidade",
    dataIndex: "quantidade",
    key: "quantidade"
  },
  {
    title: "Preço",
    dataIndex: "preco",
    key: "preco"
  },
  // {
  //   title: "Produto perecível",
  //   dataIndex: "perecivel",
  //   key: "perecivel"
  // },
  {
    title: "Data de fabricação",
    dataIndex: "fabricacao",
    key: "fabricacao"
  },
  {
    title: "Data de validade",
    dataIndex: "validade",
    key: "validade"
  },
  {
    title: "Ações",
    key: "acao",
    render: (text, record) => (
      <span
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <Button icon="edit" title="Editar" />
        <Button icon="delete" title="Excluir" onClick={handleExcluir} />
      </span>
    )
  }
];

const data = [];

for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  data.push(JSON.parse(localStorage.getItem(key)));
}

export default function CadastroItem() {
  document.title = "Desafio - Listagem";

  return (
    <>
      <Card
        title="Itens cadastrados"
        style={{
          width: "100%",
          borderRadius: "24px",
          padding: "25px",
          textSizeAdjust: "auto"
        }}
      >
        <Table
          columns={columns}
          dataSource={data}
          style={{
            margin: "15px"
          }}
        />
        <Link to="/cadastro">
          <Button type="primary" htmlType="submit">
            Adicionar novo item
          </Button>
        </Link>
      </Card>
    </>
  );
}
