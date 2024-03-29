import "../styles/ItemsTable.css";

function ItemsTable({ data }) {
  return (
    <div className="container__items-table">
      <table className="table__items">
        <thead className="items__title">
          <tr>
            <th>Initial balance</th>
            <th>Total obligations</th>
            <th>Total savings</th>
            <th>Total debits</th>
            <th> Total personal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="title__body">{data.initialBalance}</td>
            <td>{data.totalObligations}</td>
            <td>{data.totalSavings}</td>
            <td>{data.totalDebits}</td>
            <td>{data.totalPersonal}</td>
          </tr>
        </tbody>
        <thead className="items__title">
          <tr>
            <th>Sum of total expenses</th>
            <th>Residue</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="title__body">{data.sum}</td>
            <td>{data.residue}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ItemsTable;
