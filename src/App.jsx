import { useState } from "react";
import "./App.css";
import Currency from "./components/Currency";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        alignItems: "center",
        marginTop: 300,
      }}
    >
      <Currency />
    </div>
  );
}

export default App;
