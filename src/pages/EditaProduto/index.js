import React, { useState, useEffect } from "react";
import {
  Form,
  Button,
  Checkbox,
  DatePicker,
  Select,
  Input,
  Card,
  notification
} from "antd";
import moment from "moment";
import InputCustom from "../../components/Input";
import "./index.scss";

import produtoService from "../../services/produtos";

export default Form.create({ name: "produto" })(
  ({ history, form, ...props }) => {
    document.title = "Desafio - Editar";
    useEffect(() => {
      console.log("caiu aqui", props.match.params.key);
    }, []);

    let hash = props.match.params.key;

    let produto = JSON.parse(localStorage.getItem(hash));

    const [id, setId] = useState(produto.id);
    const [descricao, setDescricao] = useState(produto.descricao);
    const [unMedida, setUnMedida] = useState(produto.unMedida);
    const [quantidade, setQuantidade] = useState(produto.quantidade);
    const [preco, setPreco] = useState(produto.preco);
    const [perecivel, setPerecivel] = useState(produto.perecivel);
    const [fabricacao, setFabricacao] = useState(produto.fabricacao);
    const [validade, setValidade] = useState(produto.validade);

    const produtoEditado = {
      id,
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
          const dataAtual = moment().format("DD/MM/YYYY");

          if (validade < dataAtual) {
            notification.warning(
              {
                key: "warning",
                message: "Atenção",
                description: "O produto encontra-se vencido"
              },
              1000
            );
          } else if (validade !== null && fabricacao > validade) {
            notification.warning(
              {
                key: "warning",
                message: "Atenção",
                description:
                  "A data de fabricação não pode ser maior que a de validade"
              },
              1000
            );
          } else {
            const a = btoa(
              unescape(
                encodeURIComponent(
                  id +
                    descricao +
                    quantidade +
                    unMedida +
                    preco +
                    perecivel +
                    validade
                )
              )
            );

            produtoService.putProduct(a, produtoEditado);

            notification.success(
              {
                key: "success",
                message: "Produto cadastrado"
              },
              1000
            );
            if (a != hash) {
              localStorage.removeItem(hash);
            }
            history.push("/produto");
          }
        } else {
          notification.error(
            {
              key: "error",
              message: "Campos obrigatórios",
              description: "Todos os campos obrigatórios devem ser preenchidos"
            },
            1000
          );
        }
      });
    }

    function handleSelect(value) {
      setUnMedida(value);
    }

    const handleCheck = e => {
      setPerecivel(e.target.checked ? "Sim" : "Não");
    };

    const { getFieldDecorator } = form;

    const { Option } = Select;

    return (
      <>
        <Card
          title="Cadastro de produto"
          style={{
            maxWidth: "max-content",
            borderRadius: "24px",
            fontSize: "16px",
            height: "max-content"
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
                ],
                initialValue: [descricao]
              })(
                <Input
                  maxLength={50}
                  placeholder="Informe a descrição"
                  onChange={event => setDescricao(event.target.value)}
                />
              )}
            </Form.Item>

            <Form.Item label="Unidade de medida">
              <Select
                placeholder="Selecione a unidade de medida"
                value={unMedida}
                onChange={handleSelect}
              >
                <Option value="un">Unidade (un)</Option>
                <Option value="lt">Litro (lt)</Option>
                <Option value="kg">Quilograma (kg)</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Quantidade" colon={false}>
              {getFieldDecorator("quantidade", {
                rules: [
                  {
                    required: true,
                    message: "A quantidade deve ser informada"
                  }
                ],
                initialValue: { quantidade }
              })(
                <InputCustom
                  type="numeric"
                  decimalSeparator=","
                  decimalScale={unMedida === "un" ? 0 : 3}
                  suffix={unMedida}
                  placeholder="Informe a quantidade"
                  initialValue={quantidade}
                  value={quantidade}
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
                ],
                initialValue: { preco }
              })(
                <InputCustom
                  prefix="R$"
                  thousandSeparator="."
                  decimalSeparator=","
                  decimalScale={2}
                  type="numeric"
                  placeholder="Informe o preço"
                  initialValue={preco}
                  value={preco}
                  onChange={event => setPreco(event.target.value)}
                />
              )}
            </Form.Item>

            <Form.Item>
              <Checkbox
                checked={perecivel === "Sim" ? true : false}
                onChange={handleCheck}
              >
                Produto perecível
              </Checkbox>
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
                    required: perecivel === "Sim" ? true : false,
                    message: "A data de validade deve ser informada."
                  }
                ],
                initialValue: moment(validade, "DD/MM/YYYY")
              })(
                <DatePicker
                  style={{ width: "100%" }}
                  allowClear={false}
                  disabled={perecivel === "Não" ? true : false}
                  format={"DD/MM/YYYY"}
                  placeholder="Informe a data de validade"
                  onChange={(date, dateString) => setValidade(dateString)}
                />
              )}
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
                ],
                initialValue: moment(fabricacao, "DD/MM/YYYY")
              })(
                <DatePicker
                  style={{ width: "100%" }}
                  format={"DD/MM/YYYY"}
                  placeholder="Informe a data de fabricação"
                  onChange={(date, dateString) => setFabricacao(dateString)}
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
