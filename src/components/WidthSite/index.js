import React from "react";

const Style = {
  maxWidth: "1920px",
  display: "flex",
  width: "100%",
  margin: "0 auto",
  position: "relative"
};

export default ({ children, ...props }) => {
  return <div style={Style}>{children}</div>;
};
