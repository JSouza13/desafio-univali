import React from "react";
import { ToastContainer } from "react-toastify";
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
      <ToastContainer autoClose={3000} />
    </ConfigProvider>
  );
}

export default App;
