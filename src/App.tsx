
import React from "react";
import StockBadge from "./components/StockBadge";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Inventario</h1>

      <StockBadge productName="Teclado Mecánico" cantidad={0} />
      <StockBadge productName="Mouse Gamer" cantidad={5} />
      <StockBadge productName="Monitor 24 pulgadas" cantidad={25} />
    </div>
  );
}

export default App;

