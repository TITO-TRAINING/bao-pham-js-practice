import ActionTable from "../layouts/actionTable";

const Table = (COLUMNS) => {
  return `
    <table class="content-table person-table">
      <thead>
        <tr>
        ${COLUMNS.map((value) => {
          return `<th>${value.title}</th>`;
        })}
      </tr>
      </thead>

    </table>
  `;
};

export default Table;
