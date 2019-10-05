import React, { useState } from "react";
import { Form, Button, Checkbox, DatePicker, Select, Input, Card } from "antd";
import InputCustom from "../../components/Input";
import "./index.scss";
import { statement } from "@babel/template";

export default Form.create({ name: "produto" })(
  ({ history, form, ...props }) => {
    document.title = "Desafio - Cadastro";

    const [descricao, setDescricao] = useState("");
    const [unMedida, setUnMedida] = useState("un");
    const [quantidade, setQuantidade] = useState();
    const [preco, setPreco] = useState("");
    const [perecivel, setPerecivel] = useState(false);
    const [fabricacao, setFabricacao] = useState();
    const [validade, setValidade] = useState();

    const produto = {
      descricao,
      unMedida,
      quantidade,
      preco,
      perecivel,
      fabricacao,
      validade
    };

    function handleSubmit(event) {
      event.preventDefault();
      form.validateFields((err, values) => {
        if (!err) {
          window.localStorage.setItem(
            produto.descricao,
            JSON.stringify(produto)
          );
          history.push("/relatorio");
        }
      });
    }

    function handleDataFabricacao(date) {
      console.log(date.toDate());
      setFabricacao(date.toDate());
    }

    function handleDataValidade(date) {
      setValidade(date.toDate());
    }

    function handleSelect(value) {
      setUnMedida(value);
    }

    const handleCheck = e => {
      setPerecivel(e.target.checked);
    };

    const { getFieldDecorator } = form;

    const { Option } = Select;

    return (
      <>
        <Card
          title="Cadastro de novo item"
          style={{
            width: "100%",
            borderRadius: "24px",
            padding: "50px",
            textSizeAdjust: "auto"
          }}
        >
          <p>
            Os campos marcados com asterisco (
            <span className="required">*</span>) são de preenchimento
            obrigatório.
          </p>
          <Form>
            <Form.Item label="Descrição" colon={false}>
              {getFieldDecorator("descricao", {
                rules: [
                  {
                    required: true,
                    message: "Por favor, informe a descrição do item"
                  }
                ]
              })(
                <Input
                  placeholder="Informe a descrição"
                  onChange={event => setDescricao(event.target.value)}
                />
              )}
            </Form.Item>

            <Form.Item label="Unidade de medida">
              <Select
                defaultValue={unMedida}
                placeholder="Selecione a unidade de medida"
                value={unMedida}
                onChange={handleSelect}
              >
                <Option value="un">Unidade</Option>
                <Option value="lt">Litro</Option>
                <Option value="kg">Quilograma</Option>
              </Select>
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
                  suffix={unMedida}
                  placeholder="Informe a quantidade"
                  onChange={event => setQuantidade(event.target.value)}
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
                  onChange={event => setPreco(event.target.value)}
                />
              )}
            </Form.Item>

            <Form.Item>
              <Checkbox checked={perecivel} onChange={handleCheck}>
                Produto perecível
              </Checkbox>
            </Form.Item>

            <Form.Item
              label="Data de fabricação"
              colon={false}
              style={{
                width: "100%",
                maxWidth: "350px"
              }}
            >
              {getFieldDecorator("fabricacao", {
                rules: [
                  {
                    required: true,
                    message: "A data de fabricação deve ser informada."
                  }
                ]
              })(
                <DatePicker
                  style={{ width: "100%" }}
                  format={"DD/MM/YYYY"}
                  placeholder="Informe a data de fabricação"
                  onChange={date => handleDataFabricacao(date)}
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
              {getFieldDecorator("validade", {
                rules: [
                  {
                    required: perecivel,
                    message: "A data de validade deve ser informada."
                  }
                ]
              })(
                <DatePicker
                  style={{ width: "100%" }}
                  format={"DD/MM/YYYY"}
                  placeholder="Informe a data de validade"
                  onChange={date => handleDataValidade(date)}
                />
              )}
            </Form.Item>

            <div className="button-options">
              <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                Salvar
              </Button>

              <Button onClick={() => history.push("/")}>Cancelar</Button>
            </div>
          </Form>
        </Card>
      </>
    );
  }
);
