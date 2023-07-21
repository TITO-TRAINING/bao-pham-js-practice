import ActionTable from "../layouts/actionTable";

const Table = (COLUMNS, DATA) => {
  return `
    <table class="content-table">
      <thead>
        <tr>
        ${COLUMNS.map((value) => {
          return `<th>${value.title}</th>`;
        })}
      </tr>
      </thead>
      <tbody>
        ${DATA.map(value => {
          return `<tr>
            <td>${value.id}</td>
            <td>${value.name}</td>
            <td>${value.age}</td>
            <td>${value.address}</td>
            <td>
              ${ActionTable()}
            </td>
          </tr>`;
        })}
      </tbody>
    </table>
  `;
};

export default Table;
