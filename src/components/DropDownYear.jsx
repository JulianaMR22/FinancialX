import "../styles/DropDownYear.css";

function DropDownYear() {
  const añoActual = new Date().getFullYear();

  const años = Array.from({ length: 11 }, (_, index) => añoActual - index);
  return (
    <div className="container__year">
      <p className="year__paragraph">Year</p>
      <select className="year__select">
        <option value="">Year</option>
        {años.map((año) => (
          <option key={año} value={año}>
            {año}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropDownYear;
