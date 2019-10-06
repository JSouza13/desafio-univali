import React, { useState } from "react";
import { Table, Card, Button, notification, Modal } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./index.scss";

export default ({ history, form, ...props }) => {
  document.title = "Desafio - Relatório";

  function callDelete(produto) {
    console.log("callDelete", localStorage.length);
    console.log("callDelete 2", produto);

    var encodedData = btoa(
      unescape(
        encodeURIComponent(
          produto.id +
            produto.descricao +
            produto.quantidade +
            produto.unMedida +
            produto.preco +
            produto.perecivel +
            produto.validade
        )
      )
    );

    console.log("encodedData", encodedData);

    Modal.confirm({
      title: `Excluir o produto ${produto.descricao}`,
      content: `Você tem certeza que deseja excluir esse produto?`,
      okText: "Excluir produto",
      cancelText: "Cancelar",
      onOk() {
        handleExcluir(produto, encodedData);
      },
      onCancel() {}
    });
  }

  function handleExcluir(produto, value) {
    window.localStorage.removeItem(value);

    notification.success(
      {
        key: "success",
        message: "Sucesso",
        description: `O produto ${produto.descricao} foi excluído`
      },
      1000
    );
    history.push("/relatorio");
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
          <Button
            onClick={() => {
              callDelete(record);
            }}
            icon="delete"
            title="Excluir"
          />
        </span>
      )
    }
  ];

  return (
    <>
      <Card
        title="Produtos cadastrados"
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
