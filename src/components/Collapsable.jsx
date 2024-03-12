import GeneralTable from "./GeneralTable";
import "../styles/Collapsable.css";

function Collapsable({ title }) {
  return (
    <div className="container__collapsable">
      <details className="collapsable__details">
        <summary className="details__summary">{title}</summary>
        <GeneralTable />
      </details>
    </div>
  );
}

export default Collapsable;
