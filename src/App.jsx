import DropDownYear from "./components/DropDownYear";
import DropDownMonth from "./components/DropDownMonth";
import Collapsable from "./components/Collapsable";
import DATA from "./components/Data";
import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [selectYear, setSelectYear] = useState(DATA.years[0]);
  const [selectMonth, setSelectMonth] = useState(DATA.months[selectYear][0]);
  const [dataTable, setDataTable] = useState(DATA[selectYear][selectMonth]);
  useEffect(() => {
    setSelectMonth(DATA.months[selectYear][0]);
  }, [selectYear]);
  useEffect(() => {
    setDataTable(DATA[selectYear][selectMonth]);
  }, [selectMonth]);

  return (
    <div className="main__container">
      <div className="dropdowns">
        <DropDownYear setSelectYear={setSelectYear} />
        <DropDownMonth
          selectYear={selectYear}
          setSelectMonth={setSelectMonth}
        />
      </div>
      {Object.keys(dataTable).map((table, index) =>
        table === "summary" ? (
          <Collapsable
            key={index}
            title="Summary"
            data={dataTable[table]}
            showGeneralTable={false}
          />
        ) : (
          <Collapsable
            key={index}
            title={table}
            data={dataTable[table]}
            showGeneralTable={true}
          />
        )
      )}
    </div>
  );
}

export default App;
