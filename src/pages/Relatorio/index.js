import React from "react";
import { Card, Col, Row } from "antd";

import "./index.scss";

export default function CadastroItem() {
  return (
    <>
      <Row gutter={16} style={{ width: "100%" }}>
        <Col span={12}>
          <Card
            title="Card title"
            bordered={true}
            style={{ width: "100%", borderRadius: "24px", padding: "50px" }}
          >
            Card content
          </Card>
        </Col>
        <Col span={12}>
          <Card
            title="Card title"
            bordered={false}
            style={{ width: "100%", borderRadius: "24px", padding: "50px" }}
          >
            Card content
          </Card>
        </Col>
      </Row>
    </>
  );
}
