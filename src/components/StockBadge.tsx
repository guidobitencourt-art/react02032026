import React from "react";
import "./StockBadge.css";

interface StockBadgeProps {
  productName: string;
  cantidad: number;
}

const StockBadge: React.FC<StockBadgeProps> = ({ productName, cantidad }) => {
  let clase = "";
  let mensaje = "";

  if (cantidad === 0) {
    clase = "agotado";
    mensaje = "Agotado";
  } else if (cantidad > 0 && cantidad <= 10) {
    clase = "critico";
    mensaje = "¡Últimas unidades!";
  } else {
    clase = "normal";
    mensaje = "Disponible";
  }

  return (
    <div className={`stock-badge ${clase}`}>
      <h3>{productName}</h3>
      <p>{mensaje}</p>
      {cantidad > 0 && <span>Stock: {cantidad}</span>}
    </div>
  );
};

export default StockBadge;
