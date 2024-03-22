import GeneralTable from "./GeneralTable";
import "../styles/Collapsable.css";
import ItemsTable from "./ItemsTable";

function Collapsable({ title, showGeneralTable, data }) {
  return (
    <div className="container__collapsable">
      <details className="collapsable__details">
        <summary className="details__summary">{title}</summary>
        {showGeneralTable ? (
          <GeneralTable data={data} />
        ) : (
          <ItemsTable data={data} />
        )}
      </details>
    </div>
  );
}

export default Collapsable;
