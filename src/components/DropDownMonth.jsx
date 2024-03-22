import DATA from "./Data";
import "../styles/DropDownMonth.css";

function DropDownMonth({ selectYear, setSelectMonth }) {
  const handleSelectMonth = (month) => {
    setSelectMonth(month.target.value);
  };

  return (
    <div className="container__month">
      <p className="month__paragraph">Month</p>
      <select onChange={handleSelectMonth} className="month__select">
        {DATA.months[selectYear].map((month, index) => (
          <option key={index} value={month}>
            {month}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropDownMonth;
