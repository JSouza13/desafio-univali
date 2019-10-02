import React from "react";
import Routes from "./routes";
import { LocaleProvider } from "antd";
import pt_BR from "antd/lib/locale-provider/pt_BR";
import moment from "moment";
import "moment/locale/pt-br";

moment.locale("pt-BR");

function App() {
  return (
    <LocaleProvider locale={pt_BR}>
      <div className="App">
        <Routes />
      </div>
    </LocaleProvider>
  );
}

export default App;
