import React, { useState } from "react";
import { Table, Card, Button, notification } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./index.scss";

export default ({ history, form, ...props }) => {
  document.title = "Desafio - Listagem";

  function handleExcluir(value) {
    localStorage.removeItem(localStorage.key(value));

    notification.success(
      {
        key: "success",
        message: "Produto removido"
      },
      1000
    );
    history.push("/relatorio");

    //window.location.reload(true);
  }

  const data = [];
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    data.push(JSON.parse(localStorage.getItem(key)));
  }

  const columns = [
    {
      title: "Descrição",
      dataIndex: "descricao",
      key: "descricao"
    },

    {
      title: "Quantidade",
      dataIndex: "quantidade",
      key: "quantidade"
    },
    {
      title: "Unidade",
      dataIndex: "unMedida",
      key: "unMedida"
    },
    {
      title: "Preço",
      dataIndex: "preco",
      key: "preco"
    },

    {
      title: "Data de fabricação",
      dataIndex: "fabricacao",
      key: "fabricacao"
    },
    {
      title: "Produto perecível",
      dataIndex: "perecivel",
      key: "perecivel"
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

  return (
    <>
      <Card
        title="Itens cadastrados"
        style={{
          maxWidth: "960px",
          borderRadius: "24px",
          fontSize: "16px",
          height: "max-content"
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
};
