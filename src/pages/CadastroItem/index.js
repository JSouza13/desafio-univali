import React from "react";
import { Form, Button, Checkbox, DatePicker, Select, Input, Card } from "antd";
import InputCustom from "../../components/Input";
import "antd/dist/antd.css";

import "./index.scss";

export default function CadastroItem() {
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

  const { Option } = Select;

  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  return (
    <>
      <Card title="Cadastro de novo item" style={{ width: "100%" }}>
        {/* <div
          className="formulario-cadastro"
          style={{
            padding: "24px",
            borderRadius: "24px",
            background: "#FFF"
          }}
        > */}
        <Form>
          <Form.Item label={<span>Nickname</span>}>
            <Input placeholder="Informe a descrição" />
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

          <div className="data-box">
            <Checkbox style={{ width: "100%", marginBottom: "24px" }}>
              Produto perecível
            </Checkbox>

            <div className="data-fabricacao" style={{ width: "100%" }}>
              <DatePicker
                style={{ width: "100%", marginBottom: "24px" }}
                onChange={""}
                format={dateFormatList}
                placeholder="Informe a data de fabricação"
              />
            </div>

            <div className="data-validade" style={{ width: "100%" }}>
              <DatePicker
                style={{ width: "100%", marginBottom: "24px" }}
                onChange={""}
                format={dateFormatList}
                placeholder="Informe a data de validade"
              />
            </div>
          </div>

          <Form.Item>
            <Button type="primary">Salvar</Button>
          </Form.Item>
        </Form>
        {/* </div> */}
      </Card>
    </>
  );
}
