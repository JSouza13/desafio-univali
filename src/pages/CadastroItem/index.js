import React, { Component, useState } from "react";
import { Form, Button, Checkbox, DatePicker, Select, Input, Card } from "antd";
import useLocalStorage from "react-use-localstorage";
import InputCustom from "../../components/Input";

import "./index.scss";

export default Form.create({ name: "novo-item" })(({ form, ...props }) => {
  document.title = "Desafio - Cadastro de itens";

  const { getFieldDecorator } = form;

  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

  const { Option } = Select;

  const [item, setItem] = useLocalStorage({
    descricao: "",
    unidadeMedida: "",
    itemPerecivel: false,
    quantidade: "",
    preco: "",
    dataFabricacao: "",
    dataValidade: ""
  });

  function handleSubmit(event) {
    event.preventDefault();
    form.validateFields((err, values) => {
      // if (!err) {
      //   LoginApi.postLogin(values).then(response => {
      //     const autenticado = Boolean(
      //       response.dados && response.dados.autenticado
      //     );
      //     autenticar(autenticado);
      //     if (
      //       response.erros != null &&
      //       response.erros.erros != null &&
      //       response.erros.erros.length > 0
      //     ) {
      //       notification.warning({
      //         message: response.erros.erros.join(),
      //         description: "Erro ao autenticar."
      //       });
      //     }
      //   });
      // }
    });
  }

  return (
    <>
      <Card
        title="Cadastro de novo item"
        style={{ width: "100%", borderRadius: "24px", padding: "50px" }}
      >
        <Form>
          <Form.Item label="Descrição" colon={false}>
            {getFieldDecorator("name", {
              rules: [
                {
                  required: true,
                  message: "Por favor, informe a descrição do item"
                }
              ]
            })(<Input placeholder="Informe a descrição" />)}
          </Form.Item>

          <Form.Item label="Unidade de medida">
            {getFieldDecorator("unidade-medida", {
              rules: [
                {
                  required: true,
                  message: "A unidade de medida deve ser selecionada"
                }
              ]
            })(
              <Select placeholder="Selecione a unidade de medida" onChange={""}>
                <Option key="1" value="lt">
                  Litro
                </Option>
                <Option key="1" value="kg">
                  Quilograma
                </Option>
                <Option key="2" value="un">
                  Unidade
                </Option>
              </Select>
            )}
          </Form.Item>

          <Form.Item label="Quantidade" colon={false}>
            {getFieldDecorator("quantidade", {
              rules: [
                {
                  required: true,
                  message: "A quantidade deve ser informada"
                }
              ]
            })(
              <InputCustom
                type="numeric"
                decimalSeparator=","
                decimalScale={3}
                suffix=" un"
                placeholder="Informe a quantidade"
              />
            )}
          </Form.Item>

          <Form.Item label="Preço" colon={false}>
            {getFieldDecorator("preco", {
              rules: [
                {
                  required: true,
                  message: "O preço deve ser informado"
                }
              ]
            })(
              <InputCustom
                prefix="R$"
                thousandSeparator="."
                decimalSeparator=","
                decimalScale={2}
                type="numeric"
                placeholder="Informe o preço"
              />
            )}
          </Form.Item>

          <Form.Item>
            <Checkbox>Produto perecível</Checkbox>
          </Form.Item>

          <Form.Item
            label="Data de fabricação"
            colon={false}
            style={{
              width: "100%",
              maxWidth: "350px"
            }}
          >
            {getFieldDecorator("data-fabricacao", {
              rules: [
                {
                  required: true,
                  message: "A data de fabricação deve ser informada."
                }
              ]
            })(
              <DatePicker
                style={{ width: "100%" }}
                format={dateFormatList}
                placeholder="Informe a data de fabricação"
              />
            )}
          </Form.Item>

          <Form.Item
            label="Data de validade"
            colon={false}
            style={{
              width: "100%",
              maxWidth: "350px"
            }}
          >
            {getFieldDecorator("data-validade", {
              rules: [
                {
                  required: false,
                  message: "A data de validade deve ser informada."
                }
              ]
            })(
              <DatePicker
                style={{ width: "100%" }}
                format={dateFormatList}
                placeholder="Informe a data de validade"
              />
            )}
          </Form.Item>

          <div className="button-options">
            <Button type="primary" htmlType="submit" onClick={handleSubmit}>
              Salvar
            </Button>

            <Button>Cancelar</Button>
          </div>
        </Form>
      </Card>
    </>
  );
});
