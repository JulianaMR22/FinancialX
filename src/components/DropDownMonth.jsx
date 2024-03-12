import { useState } from "react";
import "../styles/DropDownMonth.css";

function DropDownMonth() {
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const [mesSeleccionado, setMesSeleccionado] = useState("");

  const handleSeleccionMes = (cambio) => {
    setMesSeleccionado(cambio.target.value);
  };

  return (
    <div className="container__month">
      <p className="month__paragraph">Month</p>
      <select
        value={mesSeleccionado}
        onChange={handleSeleccionMes}
        className="month__select"
      >
        <option value="">Month</option>
        {meses.map((mes, index) => (
          <option key={index} value={index + 1}>
            {mes}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropDownMonth;
