import React from "react";
import { Form, Input, Button, Checkbox, DatePicker } from "antd";
import { Select } from "antd";
import "./index.scss";

export default function CadastroItem() {
  const { formLayout } = "horizontal";

  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 }
        }
      : null;
  const buttonItemLayout =
    formLayout === "horizontal"
      ? {
          wrapperCol: { span: 14, offset: 4 }
        }
      : null;

  const { Option } = Select;

  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  return (
    <>
      <div className="formulario-cadastro">
        <Form layout={formLayout}>
          <Form.Item label="Descrição" {...formItemLayout}>
            <Input placeholder="Informe a descrição" />
          </Form.Item>

          <label>Unidade de medida :</label>
          <Select
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

          <Form.Item label="Quantidade" {...formItemLayout}>
            <Input placeholder="Informe a quantidade" />
          </Form.Item>
          <Form.Item label="Preço" {...formItemLayout}>
            <Input placeholder="Informe o preço" />
          </Form.Item>

          <Checkbox>Produto perecível</Checkbox>
          <label>Data de fabricação</label>

          <DatePicker onChange={onChange} />
          <label>Data de validade</label>
          <DatePicker onChange={onChange} />

          <Form.Item {...formItemLayout}>
            <Button type="primary">Salvar</Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}
