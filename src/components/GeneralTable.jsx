import "../styles/GeneralTable.css";

function GeneralTable({ data }) {
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
          {data.map((element) => (
            <tr key={element.name}>
              <td className="title__items">{element.name}</td>
              <td>{element.value}</td>
              <td className="items__check">
                <input type="checkbox" checked={element.paid} />
              </td>
              <td>{element.comments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GeneralTable;
