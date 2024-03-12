import "../styles/GeneralTable.css";

function GeneralTable() {
  return (
    <div className="container__general">
      <table className="general__table">
        <thead className="table__title">
          <tr>
            <th>Name</th>
            <th>Value</th>
            <th>Paid</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="title__items">Food</td>
            <td>$ 600.000</td>
            <td className="items__check">
              <input type="checkbox" />
            </td>
            <td></td>
          </tr>
          <tr>
            <td className="title__items">Car</td>
            <td>$ 600.000</td>
            <td className="items__check">
              <input type="checkbox" />
            </td>
            <td></td>
          </tr>
          <tr>
            <td className="title__items">Month</td>
            <td>$ 600.000</td>
            <td className="items__check">
              <input type="checkbox" />
            </td>
            <td></td>
          </tr>

          <tr>
            <td className="title__items">Bill</td>
            <td>$ 600.000</td>
            <td className="items__check">
              <input type="checkbox" />
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default GeneralTable;
