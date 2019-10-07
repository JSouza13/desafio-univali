import React, { useState, useEffect } from "react";
import { Table, Card, Button, notification, Modal } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./index.scss";

import produtoService from "../../services/produtos";

export default ({ history, form, ...props }) => {
  document.title = "Desafio - Relatório";

  useEffect(() => {
    async function loadProdutos() {
      const response = await produtoService.ListProduct();
      setProduto(response);
    }
    loadProdutos();
  }, []);

  const [produto, setProduto] = useState([]);

  const data = produto;

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
          <Link
            to={
              "/produto/editar/" +
              btoa(
                unescape(
                  encodeURIComponent(
                    record.id +
                      record.descricao +
                      record.quantidade +
                      record.unMedida +
                      record.preco +
                      record.perecivel +
                      record.validade
                  )
                )
              )
            }
          >
            <Button
              icon="edit"
              title="Editar"
              onClick={() => {
                setProduto(record);
              }}
            />
          </Link>
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

  function callDelete(produto) {
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

    Modal.confirm({
      title: `Excluir o produto "${produto.descricao}"`,
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
    produtoService.deleteProductById(value);

    notification.success(
      {
        key: "success",
        message: "Sucesso",
        description: `O produto "${produto.descricao}" foi excluído`
      },
      1000
    );
    history.push("/produto");
  }

  function handleEditar(produto) {
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

    console.log(produtoService.ListProduct());
  }

  return (
    <>
      <Card
        title="Produtos cadastrados"
        style={{
          maxWidth: "max-content",
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
