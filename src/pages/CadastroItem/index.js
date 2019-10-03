import React, { Component, useState } from "react";
import { Form, Button, Checkbox, DatePicker, Select, Input, Card } from "antd";
import useLocalStorage from "react-use-localstorage";
import InputCustom from "../../components/Input";

import "./index.scss";

export default function CadastroItem() {
  const [item, setItem] = useLocalStorage({
    descricao: "",
    unidadeMedida: "",
    itemPerecivel: false,
    quantidade: "",
    preco: "",
    dataFabricacao: "",
    dataValidade: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  // // Carregar os dados do localStorage
  // const componentDidMount = () => {
  //   const repositories = localStorage.getItem("repositories");

  //   if (repositories) {
  //     this.setState({ repositories: JSON.parse(repositories) });
  //   }
  // };

  // // Salvar os dados do localStorage
  // const componentDidUpdate = (_, prevState) => {
  //   const { repositories } = this.state;

  //   if (prevState.repositories !== repositories) {
  //     localStorage.setItem("repositories", JSON.stringify(repositories));
  //   }
  // };

  // const handleInputChange = e => {
  //   this.setState({ newRepo: e.target.value, error: null });
  // };

  // const { newRepo, repositories, loading, error } = this.state;

  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

  const { Option } = Select;

  return (
    <>
      <Card
        title="Cadastro de novo item"
        style={{ width: "100%", borderRadius: "24px", padding: "50px" }}
        onSubmit={handleSubmit}
      >
        <Form>
          <Form.Item label="Descrição *" colon={false}>
            <Input
              type="text"
              placeholder="Informe a descrição"
              value={item}
              onChange={e => setItem(e.target.value)}
            />
          </Form.Item>

          <Select
            style={{ width: "100%", marginBottom: "24px" }}
            showSearch
            placeholder="Selecione a unidade de medida"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.props.children
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="litro">Litro</Option>
            <Option value="quilograma">Quilograma</Option>
            <Option value="unidade">Unidade</Option>
          </Select>

          <Form.Item>
            <InputCustom
              label="Quantidade"
              type="numeric"
              decimalSeparator=","
              decimalScale={3}
              suffix="lt"
              required
              placeholder="Informe a quantidade"
            />
          </Form.Item>
          <Form.Item>
            <InputCustom
              prefix="R$"
              thousandSeparator="."
              decimalSeparator=","
              decimalScale={2}
              type="numeric"
              label="Preço"
              required
              placeholder="Informe o preço"
            />
          </Form.Item>

          <Checkbox style={{ width: "100%", marginBottom: "24px" }}>
            Produto perecível
          </Checkbox>

          <div
            className="data-fabricacao"
            style={{
              width: "100%",
              maxWidth: "350px",
              marginRight: "25px"
            }}
          >
            <DatePicker
              style={{ width: "100%", marginBottom: "24px" }}
              onChange={""}
              format={dateFormatList}
              placeholder="Informe a data de fabricação"
            />
          </div>

          <div
            className="data-validade"
            style={{ width: "100%", maxWidth: "350px" }}
          >
            <DatePicker
              style={{ width: "100%", marginBottom: "24px" }}
              onChange={""}
              format={dateFormatList}
              placeholder="Informe a data de validade"
            />
          </div>
        </Form>

        <div className="button-options">
          <Button type="primary" htmlType="submit">
            Salvar
          </Button>
          <Button>Cancelar</Button>
        </div>
      </Card>
    </>
  );
}
