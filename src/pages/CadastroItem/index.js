import React, { useState, useEffect } from "react";
import {
  Form,
  Button,
  Checkbox,
  DatePicker,
  Select,
  Input,
  Card,
  Typography
} from "antd";
import InputCustom from "../../components/Input";

import "./index.scss";

const { Paragraph } = Typography;

export default Form.create({ name: "produto" })(
  ({ history, form, ...props }) => {
    document.title = "Desafio - Cadastro";

    const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

    const { Option } = Select;

    function handleSubmit(event) {
      event.preventDefault();
      form.validateFields((err, values) => {
        console.log(values.descricao);
      });
    }
    const { getFieldDecorator } = form;

    // const CreateUserLocal = ({ history, form, ...props }) => {
    //   const [alteracao, setAlteracao] = useState(false);
    //   const [produto, setProduto] = useState(new Produto());
    //

    //   useEffect(() => {
    //     getProduto(props.match.params.id).then(result => {
    //       setProduto(new Produto(result.data));
    //     });
    //   }, [props.match.params.id]);

    //   function handleSubmit(event) {
    //     event.preventDefault();
    //     form.validateFields((err, values) => {
    //       if (!err) {
    //         let obj = {
    //           descricao: values.fullName,
    //           login: values.login,
    //           phone: values.phone.replace("_", ""),
    //           mail: values.mail
    //         };
    //         if (props.match.params.id == null) {
    //           createProduto(values).then(result => {
    //             setAlteracao(false);
    //             history.push("/cadastro");
    //           });
    //         } else {
    //           let userToEdit = new Produto({
    //             id: props.match.params.id,
    //             ...obj
    //           });
    //           updateProduto(userToEdit).then(result => {
    //             history.push("/cadastro");
    //           });
    //         }
    //       }
    //     });
    //   }

    return (
      <>
        <Card
          title="Cadastro de novo item"
          style={{ width: "100%", borderRadius: "24px", padding: "50px" }}
        >
          <Paragraph>
            Os campos marcados com asterisco (
            <span className="required">*</span>) são de preenchimento
            obrigatório.
          </Paragraph>
          <Form>
            <Form.Item label="Descrição" colon={false}>
              {getFieldDecorator("descricao", {
                rules: [
                  {
                    required: true,
                    message: "Por favor, informe a descrição do item"
                  }
                ]
              })(<Input placeholder="Informe a descrição" />)}
            </Form.Item>

            <Form.Item label="Unidade de medida">
              <Select
                defaultValue="un"
                placeholder="Selecione a unidade de medida"
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

              <Button onClick={() => this.props.history.push("/cadastro")}>
                Cancelar
              </Button>
            </div>
          </Form>
        </Card>
      </>
    );
  }
);
