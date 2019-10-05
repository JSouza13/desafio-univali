import React, { useState } from "react";
import { Table, Card, Button } from "antd";
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
  {
    title: "Produto perecível",
    dataIndex: "perecivel",
    key: "perecivel"
  },
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
      <span>
        <Button icon="edit" title="Editar" />
        <Button icon="delete" title="Excluir" />
      </span>
    )
  }
];

const data = [
  {
    key: "1",
    descricao: "Batata",
    unMedida: "Quilograma",
    quantidade: "10",
    preco: "15,60",
    perecivel: "sim",
    fabricacao: "15/10/2019",
    validade: "16/11/2019"
  }
];

function produto() {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = JSON.parse(localStorage.getItem(key));
  }
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
          padding: "50px",
          textSizeAdjust: "auto"
        }}
      >
        <Table
          columns={columns}
          dataSource={data}
          style={{ margin: "15px", scrollMarginInline: "auto" }}
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
