import React from "react";
import Routes from "./routes";
import { ConfigProvider } from "antd";
import pt_BR from "antd/es/locale/pt_BR";
import moment from "moment";
import "moment/locale/pt-br";

moment.locale("pt_BR");

function App() {
  return (
    <ConfigProvider locale={pt_BR}>
      <Routes />
    </ConfigProvider>
  );
}

export default App;
