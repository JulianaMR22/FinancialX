import DATA from "./Data";
import "../styles/DropDownYear.css";

function DropDownYear({ setSelectYear }) {
  function selectyear(year) {
    setSelectYear(year.target.value);
  }
  return (
    <div className="container__year">
      <p className="year__paragraph">Year</p>
      <select onChange={selectyear} className="year__select">
        {DATA.years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropDownYear;
